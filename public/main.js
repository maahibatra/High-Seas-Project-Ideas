window.onload = function() {
    document.getElementById('diffs').value = 'difficulty';
    document.getElementById('langs').value = 'languages';
}

const data = {
    easy: {
        things: [
            "maritime blog", 
            "ship's log", 
            "sea-themed quiz", 
            "crew roster tracker", 
            "nautical calendar", 
            "captain's daily journal", 
            "port checklist", 
            "message in a bottle simulator", 
            "lighthouse signal tracker", 
            "ocean wildlife catalog"
        ],
        actions: [
            "logs daily voyages", 
            "tracks crew tasks", 
            "catalogs maritime trivia", 
            "keeps a record of ship sightings", 
            "organizes port stops", 
            "maps simple trade routes", 
            "tracks ocean wildlife", 
            "reminds about ship maintenance", 
            "sends distress signals", 
            "plots nearby islands"
        ],
        features: [
            "interactive ship wheel menu", 
            "compass-based navigation", 
            "animated waves background", 
            "nautical flags for notifications", 
            "simple treasure map creator", 
            "seagull sound effects", 
            "basic tide charts", 
            "customizable ship names", 
            "cannonball animation for actions", 
            "ship bell notification sounds"
        ]
    },
    medium: {
        things: [
            "treasure hunt planner", 
            "pirate recipe app", 
            "port weather forecaster", 
            "ship maintenance tracker", 
            "voyage journal", 
            "sea trading log", 
            "fishing spot tracker", 
            "maritime storytelling app", 
            "crew budget manager", 
            "ship cargo organizer"
        ],
        actions: [
            "plots treasure routes", 
            "logs ship supplies", 
            "predicts storm patterns", 
            "schedules fishing trips", 
            "tracks daily profits", 
            "compiles stories from sailors", 
            "calculates optimal trade routes", 
            "assigns roles to crew members", 
            "organizes ship inventories", 
            "compares weather at ports"
        ],
        features: [
            "hidden treasure clues", 
            "seafood recipe recommendations", 
            "real-time ocean current maps", 
            "weather-based trade alerts", 
            "customizable pirate avatars", 
            "crew logbook with achievements", 
            "inventory visuals with treasure chests", 
            "pirate slang generator", 
            "interactive port maps", 
            "tavern meeting scheduler"
        ]
    },
    hard: {
        things: [
            "pirate trading network", 
            "underwater exploration AI", 
            "naval battle simulator", 
            "island resource manager", 
            "deep-sea adventure game", 
            "smuggling route optimizer", 
            "shipwreck salvage tracker", 
            "oceanic empire builder", 
            "submarine explorer app", 
            "merfolk diplomacy simulator"
        ],
        actions: [
            "tracks merchant fleets", 
            "maps uncharted territories", 
            "simulates ship combat scenarios", 
            "predicts naval encounters", 
            "manages island economies", 
            "explores underwater caves", 
            "analyzes smuggling profits", 
            "tracks fleet formations", 
            "plots safe passages through storms", 
            "recommends ship upgrades"
        ],
        features: [
            "dynamic treasure economy", 
            "procedural underwater worlds", 
            "tides and weather simulations", 
            "realistic naval combat physics", 
            "dynamic island resource generation", 
            "AI-driven pirate captains", 
            "historically accurate ship designs", 
            "deep-sea radar visualizations", 
            "submarine navigation systems", 
            "underwater treasure recovery missions"
        ]
    }
};
const languages = ["HTML", "CSS", "JS", "Python", "Java", "Ruby", "C++", "C#", "PHP", "Go", "Swift", "Kotlin", "R", "TypeScript", "SQL", "Shell", "Rust", "Dart", "Lua"];

const allData = {
    things: [...data.easy.things, ...data.medium.things, ...data.hard.things],
    actions: [...data.easy.actions, ...data.medium.actions, ...data.hard.actions],
    features: [...data.easy.features, ...data.medium.features, ...data.hard.features]
};

function generateIdea() {
    const selectedLanguage = document.getElementById("langs").value;
    const language = selectedLanguage === "languages" ? languages[Math.floor(Math.random() * languages.length)] : selectedLanguage;

    const selectedDifficulty = document.getElementById("diffs").value;
    const dataset = selectedDifficulty === "difficulty" ? allData : data[selectedDifficulty];

    const thing = dataset.things[Math.floor(Math.random() * dataset.things.length)];
    const action = dataset.actions[Math.floor(Math.random() * dataset.actions.length)];
    const feature = dataset.features[Math.floor(Math.random() * dataset.features.length)];

    const templates = [
        `A ${thing} using ${language} that ${action}.`,
        `A ${thing} featuring ${feature}, written in ${language}.`,
        `A ${thing} focused on ${feature} that ${action}.`,
        `A ${thing} that ${action}, written in ${language}, featuring ${feature}.`
    ];
    const sentence = templates[Math.floor(Math.random() * templates.length)];

    console.log(sentence);
}
