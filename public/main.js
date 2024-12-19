window.onload = function() {
    document.getElementById('diffs').value = 'difficulty';
    document.getElementById('langs').value = 'languages';
}

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
    "an inventory visuals with treasure chests",
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
    
    const outputName = document.getElementById('outputName');
    const outputLangs = document.getElementById('outputLangs');

    outputName.innerHTML = sentence;
    outputLangs.innerHTML = `Written in ${language}`;

    const characters = sentence.length;
    outputName.style.width = `${characters}ch`;

    outputName.style.animation = 'none';

    setTimeout(() => {
        outputName.style.animation = `typing 2s steps(${characters}), blink .5s step-end infinite alternate`;
    }, 10);
}
