const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();
const app = express();
const API_URL = "https://high-seas-project-ideas.vercel.app//api/generateSpeech";

app.use(express.json());
app.use(cors());

app.post("/api/generateSpeech", async(req, res) => {
    const { prompt } = req.body;
    if(!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-72B-Instruct',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.hFKey}`
                }
            }
        );

        console.log("Hugging Face API Response:", response.data);

        const generatedText = response.data[0]?.generated_text;
        if(generatedText) {
            let pirateSpeech = generatedText.replace(/Turn this line[^]*?English language. /g, "");
            pirateSpeech = pirateSpeech.split("\n")[0];
            pirateSpeech = pirateSpeech.replace(/['"]/g, '');
            res.status(200).json({ pirateSpeech });
        } else {
        res.status(500).json({error: "No pirate speech generated"});
        }
    } catch (error) {
        console.error('Error calling Hugging Face API:', error.response || error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});