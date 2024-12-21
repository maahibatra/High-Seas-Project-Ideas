const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
require('dotenv').config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/api/generateSpeech", async(req, res) => {
    const prompt = "Say one line in pirate speech.";
    try {
        const response = await axios.post(
            'https://api-inference.huggingface.co/models/Qwen/Qwen2.5-Coder-32B-Instruct',
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${process.env.hFKey}`,
                },
            }
        );

        console.log("Hugging Face API Response:", response.data);

        const generatedText = response.data[0]?.generated_text;
        if(generatedText) {
            res.status(200).json(generatedText);
        } else {
        res.status(500).json({error: "No ideas generated"});
        }
    } catch (error) {
        console.error('Error calling Hugging Face API:', error.response || error);
        res.status(500).json({ error: 'Error processing your request' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});