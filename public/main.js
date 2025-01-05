window.onload = function() {
    document.getElementById("diffs").value = "difficulty";
    document.getElementById("langs").value = "languages";
}

const checkbox = document.getElementById("checkbox");

const savedState = localStorage.getItem("checkboxState");
if(savedState === "checked") {
    checkbox.checked = true;
} else {
    checkbox.checked = false;
}

checkbox.addEventListener("change", function() {
    if(this.checked) {
        console.log("Checkbox checked");
        localStorage.setItem("checkboxState", "checked");
    } else {
        console.log("Checkbox unchecked");
        localStorage.setItem("checkboxState", "unchecked");
    }
});

const data = {
    easy: [
        " blog",
        " to-do list",
        " simple task manager",
        " personal calendar",
        " recipe book"
    ],
    medium: [
        " fitness tracker",
        " note-taking app",
        " budget manager",
        "n event planner",
        " habit tracker"
    ],
    hard: [
        "n e-commerce platform",
        "n AI assistant",
        " video editing software",
        " real-time collaboration tool",
        " social media network",
    ]
}

const features = [
    "an interactive ship wheel menu",
    "a compass-based navigation",
    "animated waves background",
    "a simple treasure map creator",
    "seagull sound effects",
    "basic tide charts",
    "customizable ship names",
    "cannonball animation for actions",
    "ship bell notification sounds",
    "hidden treasure clues",
    "seafood recipe recommendations",
    "real-time ocean current maps",
    "customizable pirate avatars",
    "a crew logbook with achievements",
    "treasure chests storage",
    "a pirate slang generator",
    "interactive port maps",
    "a tavern meeting scheduler",
    "a dynamic treasure economy",
    "a procedural underwater worlds",
    "tides and weather simulations",
    "realistic naval combat physics",
    "a dynamic island resource generation",
    "an AI-driven pirate captains",
    "historically accurate ship designs",
    "deep-sea radar visualizations",
    "submarine navigation systems",
    "underwater treasure recovery missions"
]

const languages = ["HTML", "CSS", "JS", "Python", "Java", "Ruby", "C++", "C#", "PHP", "Go", "Swift", "Kotlin", "R", "TypeScript", "SQL", "Shell", "Rust", "Dart", "Lua"];

const randomDiff = {
    things: [...data.easy, ...data.medium, ...data.hard],
};

function generateIdea() {
    const selectedLanguage = document.getElementById("langs").value;
    const language = selectedLanguage === "languages" ? languages[Math.floor(Math.random() * languages.length)] : selectedLanguage;

    const selectedDifficulty = document.getElementById("diffs").value;
    const dataset = selectedDifficulty === "difficulty" ? randomDiff.things : data[selectedDifficulty];

    const thing = dataset[Math.floor(Math.random() * dataset.length)];
    const feature = features[Math.floor(Math.random() * features.length)];

    const sentence = `A${thing} featuring ${feature}.`;
    
    const outputName = document.getElementById("outputName");
    const outputLangs = document.getElementById("outputLangs");

    outputName.style.animation = "none";
    outputLangs.style.animation = "none";

    if(checkbox.checked) {
        outputName.innerHTML = "Loading...";
        outputLangs.innerHTML = "Waiting...";

        outputName.style.animation = "none";
        outputLangs.style.animation = "none";

        outputName.style.width = "10ch";
        outputLangs.style.width = "10ch";

        setTimeout(() => {
            outputName.style.animation = `typing 0.5s steps(10), blink .5s step-end infinite alternate`;
        }, 10);

        setTimeout(() => {
            outputLangs.style.animation = `typing 0.5s steps(10), blink .5s step-end infinite alternate`;
        }, 10);

        fetch("https://https://high-seas-project-ideas.vercel.app/api/generateSpeech", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt: `Turn this line: "${sentence}" into pirate speech. Only give one sentence, 70 characters maximum in the English language.` })
        })
        .then(response => response.json())
        .then(data => {
            if(data.pirateSpeech) {
                const pirateSpeech = data.pirateSpeech;

                outputName.innerHTML = pirateSpeech;
                outputLangs.innerHTML = `Written in ${language}`;

                const charactersSpeech = pirateSpeech.length;
                outputName.style.width = `${charactersSpeech}ch`;
                const charactersLangs = language.length + 11;
                outputLangs.style.width = `${charactersLangs}ch`;

                outputName.style.animation = "none";
                outputLangs.style.animation = "none";

                setTimeout(() => {
                    outputName.style.animation = `typing 3s steps(${charactersSpeech}), blink .5s step-end infinite alternate`;
                }, 10);

                setTimeout(() => {
                    outputLangs.style.animation = `typing 3s steps(${charactersLangs}), blink .5s step-end infinite alternate`;
                }, 10);
            }
            console.log("Pirate Speech:", data);
        })
        .catch(error => {
            console.error("Error generating:", error);
        });
    } else {
        outputName.innerHTML = sentence;
        outputLangs.innerHTML = `Written in ${language}`
        
        const charactersName = sentence.length;
        outputName.style.width = `${charactersName}ch`;
        const charactersLangs = language.length + 11;
        outputLangs.style.width = `${charactersLangs}ch`;

        outputName.style.animation = "none";
        outputLangs.style.animation = "none";

        setTimeout(() => {
            outputName.style.animation = `typing 3s steps(${charactersName}), blink .5s step-end infinite alternate`;
        }, 50);

        setTimeout(() => {
            outputLangs.style.animation = `typing 3s steps(${charactersLangs}), blink .5s step-end infinite alternate`;
        }, 50);

        console.log("Checkbox unchecked.");
    }
}