// Quiz data
const quizData = [
    {
        question: "How do you handle challenges?",
        options: [
            { text: "I face them head-on with courage.", points: { david: 2, esther: 1, moses: 1 } },
            { text: "I trust in a higher power to guide me.", points: { ruth: 2, abraham: 1, noah: 1 } },
            { text: "I strategize and plan carefully.", points: { joseph: 2, daniel: 1, samuel: 1 } },
            { text: "I stay calm and patient.", points: { abraham: 2, sarah: 1, moses: 1 } },
        ],
    },
    {
        question: "You're tasked with leading a group through a tough situation. What's your approach?",
        options: [
            { text: "I take charge and inspire others with my confidence.", points: { david: 2, moses: 1, esther: 1 } },
            { text: "I listen to everyone's input before deciding.", points: { samuel: 2, joseph: 1, sarah: 1 } },
            { text: "I pray or reflect deeply before acting.", points: { daniel: 2, noah: 1, abraham: 1 } },
            { text: "I support the group emotionally and keep them united.", points: { ruth: 2, esther: 1, moses: 1 } },
        ],
    },
    {
        question: "What's your ideal way to spend a free day?",
        options: [
            { text: "Exploring nature or going on an adventure.", points: { david: 2, noah: 1, abraham: 1 } },
            { text: "Spending quality time with family or friends.", points: { ruth: 2, sarah: 1, esther: 1 } },
            { text: "Reading, learning, or solving problems.", points: { daniel: 2, joseph: 1, samuel: 1 } },
            { text: "Reflecting quietly or meditating.", points: { moses: 2, abraham: 1, noah: 1 } },
        ],
    },
    {
        question: "What's most important to you in life?",
        options: [
            { text: "Faith and spiritual growth.", points: { abraham: 2, daniel: 1, samuel: 1 } },
            { text: "Protecting and caring for loved ones.", points: { ruth: 2, esther: 1, sarah: 1 } },
            { text: "Achieving success through hard work.", points: { joseph: 2, noah: 1, david: 1 } },
            { text: "Making a difference in the world.", points: { moses: 2, esther: 1, david: 1 } },
        ],
    },
    {
        question: "How do you react when someone wrongs you?",
        options: [
            { text: "I confront them directly but fairly.", points: { david: 2, esther: 1, moses: 1 } },
            { text: "I forgive and move on quickly.", points: { ruth: 2, sarah: 1, abraham: 1 } },
            { text: "I analyze the situation and respond wisely.", points: { joseph: 2, daniel: 1, samuel: 1 } },
            { text: "I pray for guidance on how to handle it.", points: { noah: 2, moses: 1, abraham: 1 } },
        ],
    },
    {
        question: "How do you approach uncertainty in life?",
        options: [
            { text: "I trust that everything will work out as it should.", points: { abraham: 2, noah: 1, ruth: 1 } },
            { text: "I take bold action to create my own path.", points: { esther: 2, david: 1, moses: 1 } },
            { text: "I seek wisdom and understanding first.", points: { daniel: 2, samuel: 1, joseph: 1 } },
            { text: "I remain patient and wait for clarity.", points: { sarah: 2, moses: 1, abraham: 1 } },
        ],
    },
    {
        question: "How do you interact with new people?",
        options: [
            { text: "I'm warm and welcoming, eager to connect.", points: { ruth: 2, esther: 1, sarah: 1 } },
            { text: "I'm cautious but respectful until I know them better.", points: { daniel: 2, samuel: 1, noah: 1 } },
            { text: "I take the lead and make them feel included.", points: { david: 2, moses: 1, joseph: 1 } },
            { text: "I observe quietly before engaging.", points: { abraham: 2, sarah: 1, moses: 1 } },
        ],
    },
    {
        question: "What's your biggest dream or goal?",
        options: [
            { text: "To lead or inspire others to greatness.", points: { david: 2, moses: 1, esther: 1 } },
            { text: "To build a lasting legacy or family.", points: { abraham: 2, sarah: 1, ruth: 1 } },
            { text: "To overcome challenges and rise to the top.", points: { joseph: 2, noah: 1, daniel: 1 } },
            { text: "To live a life of purpose and faith.", points: { samuel: 2, daniel: 1, moses: 1 } },
        ],
    },
    {
        question: "What's your go-to way to cheer someone up?",
        options: [
            { text: "I tell them an inspiring story or give a pep talk.", points: { david: 2, moses: 1, esther: 1 } },
            { text: "I spend time with them and show I care.", points: { ruth: 2, sarah: 1, abraham: 1 } },
            { text: "I offer practical advice or solutions.", points: { joseph: 2, daniel: 1, samuel: 1 } },
            { text: "I pray for them or share a moment of reflection.", points: { noah: 2, moses: 1, abraham: 1 } },
        ],
    },
    {
        question: "How do you make tough decisions?",
        options: [
            { text: "I rely on my instincts and act decisively.", points: { david: 2, esther: 1, moses: 1 } },
            { text: "I seek guidance through prayer or reflection.", points: { samuel: 2, daniel: 1, noah: 1 } },
            { text: "I weigh all options carefully before choosing.", points: { joseph: 2, sarah: 1, abraham: 1 } },
            { text: "I consider how my decision impacts others.", points: { ruth: 2, esther: 1, moses: 1 } },
        ],
    },
];

// Results data
const results = {
    david: {
        name: "David",
        description: "You're like David—brave, passionate, and a natural leader. You face challenges with courage and have a heart for those you care about.",
        funFact: "Did you know David defeated the giant Goliath with just a sling and a stone? (1 Samuel 17)",
    },
    ruth: {
        name: "Ruth",
        description: "You're like Ruth—loyal, bold, and full of faith. You form deep connections and stand by those you love no matter what.",
        funFact: "Ruth's loyalty to Naomi led her to say, 'Where you go, I will go' (Ruth 1:16).",
    },
    abraham: {
        name: "Abraham",
        description: "You're like Abraham—patient, faithful, and trusting. You have a strong sense of purpose and believe in a greater plan.",
        funFact: "Abraham was 100 years old when his son Isaac was born! (Genesis 21:5)",
    },
    joseph: {
        name: "Joseph",
        description: "You're like Joseph—adaptable, strategic, and resilient. You thrive in tough situations and always find a way to come out on top.",
        funFact: "Joseph interpreted Pharaoh's dreams and saved Egypt from famine (Genesis 41).",
    },
    moses: {
        name: "Moses",
        description: "You're like Moses—obedient, humble, and a mediator. You feel a deep responsibility to guide others and follow a higher calling.",
        funFact: "Moses parted the Red Sea to lead the Israelites to freedom (Exodus 14).",
    },
    esther: {
        name: "Esther",
        description: "You're like Esther—courageous, wise, and selfless. You're willing to take risks for the greater good and stand up for what's right.",
        funFact: "Esther risked her life to save her people from a plot to destroy them (Esther 4).",
    },
    daniel: {
        name: "Daniel",
        description: "You're like Daniel—wise, disciplined, and unwavering in faith. You seek understanding and remain steadfast even in tough times.",
        funFact: "Daniel survived a night in a lions' den because of his faith (Daniel 6).",
    },
    noah: {
        name: "Noah",
        description: "You're like Noah—obedient, diligent, and trusting. You follow through on what you believe is right, no matter how big the task.",
        funFact: "Noah built an ark that saved his family and the animals from the flood (Genesis 6-9).",
    },
    sarah: {
        name: "Sarah",
        description: "You're like Sarah—hopeful, supportive, but sometimes doubtful. You dream big and remain loyal, even when the path is unclear.",
        funFact: "Sarah laughed when God told her she'd have a child in her old age (Genesis 18:12).",
    },
    samuel: {
        name: "Samuel",
        description: "You're like Samuel—devout, discerning, and attentive. You listen closely to your instincts and strive to live with integrity.",
        funFact: "Samuel heard God's voice as a young boy while serving in the temple (1 Samuel 3).",
    },
};

// Character stories and timeline data
const characterStories = {
    david: {
        timeline: [
            {
                year: "~1000 BC",
                event: "Anointed as King",
                description: "Samuel anoints David as the future king of Israel while he's still a young shepherd.",
                reference: "1 Samuel 16:1-13",
                minigame: "goliath"
            },
            {
                year: "~1000 BC",
                event: "Defeats Goliath",
                description: "David defeats the Philistine giant Goliath with just a sling and a stone.",
                reference: "1 Samuel 17",
                minigame: "goliath"
            },
            {
                year: "~990 BC",
                event: "Becomes King",
                description: "David becomes king of Israel after Saul's death.",
                reference: "2 Samuel 5:1-5"
            },
            {
                year: "~980 BC",
                event: "Brings Ark to Jerusalem",
                description: "David brings the Ark of the Covenant to Jerusalem with great celebration.",
                reference: "2 Samuel 6"
            }
        ],
        minigames: {
            goliath: {
                name: "David vs Goliath",
                description: "Help David defeat Goliath by aiming your sling!",
                instructions: "Click and drag to aim, release to throw the stone. Hit Goliath to win!",
                difficulty: "medium"
            }
        }
    },
    ruth: {
        timeline: [
            {
                year: "~1100 BC",
                event: "Marriage and Loss",
                description: "Ruth marries into an Israelite family but soon becomes a widow.",
                reference: "Ruth 1:1-5"
            },
            {
                year: "~1100 BC",
                event: "Loyalty to Naomi",
                description: "Ruth chooses to stay with her mother-in-law Naomi, declaring 'Where you go, I will go'.",
                reference: "Ruth 1:16-17"
            },
            {
                year: "~1100 BC",
                event: "Gleaning in Boaz's Field",
                description: "Ruth works in Boaz's field to provide for Naomi and herself.",
                reference: "Ruth 2"
            },
            {
                year: "~1100 BC",
                event: "Marriage to Boaz",
                description: "Ruth marries Boaz, becoming an ancestor of King David and Jesus.",
                reference: "Ruth 4:13-17"
            }
        ]
    },
    abraham: {
        timeline: [
            {
                year: "~2000 BC",
                event: "God's Call",
                description: "God calls Abram to leave his homeland and promises to make him a great nation.",
                reference: "Genesis 12:1-3"
            },
            {
                year: "~2000 BC",
                event: "Covenant with God",
                description: "God makes a covenant with Abram, promising him descendants as numerous as the stars.",
                reference: "Genesis 15"
            },
            {
                year: "~1900 BC",
                event: "Birth of Isaac",
                description: "Abraham and Sarah have a son, Isaac, in their old age.",
                reference: "Genesis 21:1-7"
            },
            {
                year: "~1900 BC",
                event: "Test of Faith",
                description: "God tests Abraham's faith by asking him to sacrifice Isaac.",
                reference: "Genesis 22"
            }
        ]
    },
    joseph: {
        timeline: [
            {
                year: "~1900 BC",
                event: "Dreams and Betrayal",
                description: "Joseph has prophetic dreams and is sold into slavery by his brothers.",
                reference: "Genesis 37"
            },
            {
                year: "~1890 BC",
                event: "Rise in Potiphar's House",
                description: "Joseph becomes successful in Potiphar's house but is falsely accused.",
                reference: "Genesis 39"
            },
            {
                year: "~1880 BC",
                event: "Interprets Dreams",
                description: "Joseph interprets Pharaoh's dreams and becomes second in command of Egypt.",
                reference: "Genesis 41"
            },
            {
                year: "~1870 BC",
                event: "Reconciliation",
                description: "Joseph forgives his brothers and reunites with his family.",
                reference: "Genesis 45"
            }
        ]
    },
    moses: {
        timeline: [
            {
                year: "~1500 BC",
                event: "Birth and Adoption",
                description: "Moses is born and adopted by Pharaoh's daughter after being placed in a basket on the Nile.",
                reference: "Exodus 2:1-10"
            },
            {
                year: "~1460 BC",
                event: "Flees to Midian",
                description: "Moses flees to Midian after killing an Egyptian who was beating a Hebrew.",
                reference: "Exodus 2:11-15"
            },
            {
                year: "~1440 BC",
                event: "Burning Bush",
                description: "God speaks to Moses through a burning bush, calling him to lead Israel out of Egypt.",
                reference: "Exodus 3",
                minigame: "burning-bush"
            },
            {
                year: "~1440 BC",
                event: "Parting of the Red Sea",
                description: "Moses leads the Israelites through the parted Red Sea, escaping Pharaoh's army.",
                reference: "Exodus 14",
                minigame: "red-sea"
            }
        ],
        minigames: {
            "burning-bush": {
                name: "The Burning Bush",
                description: "Experience the moment when God speaks to Moses through the burning bush.",
                instructions: "Click the bush to reveal God's messages. Find all messages to win!",
                difficulty: "easy"
            },
            "red-sea": {
                name: "Parting of the Red Sea",
                description: "Help Moses part the Red Sea for the Israelites to cross.",
                instructions: "Click to part the waters. Guide the Israelites safely across!",
                difficulty: "hard"
            }
        }
    },
    esther: {
        timeline: [
            {
                year: "~480 BC",
                event: "Becomes Queen",
                description: "Esther becomes queen of Persia after winning a beauty contest.",
                reference: "Esther 2:17"
            },
            {
                year: "~479 BC",
                event: "Haman's Plot",
                description: "Haman plots to destroy all the Jews in the Persian Empire.",
                reference: "Esther 3"
            },
            {
                year: "~479 BC",
                event: "Risking Her Life",
                description: "Esther risks her life by approaching the king without being summoned.",
                reference: "Esther 4-5"
            },
            {
                year: "~479 BC",
                event: "Victory and Celebration",
                description: "Esther saves her people, and the Jews celebrate the festival of Purim.",
                reference: "Esther 8-9"
            }
        ]
    },
    daniel: {
        timeline: [
            {
                year: "~605 BC",
                event: "Taken to Babylon",
                description: "Daniel is taken to Babylon as a captive and trained in the king's court.",
                reference: "Daniel 1"
            },
            {
                year: "~600 BC",
                event: "Interprets Dreams",
                description: "Daniel interprets King Nebuchadnezzar's dreams.",
                reference: "Daniel 2"
            },
            {
                year: "~550 BC",
                event: "Lion's Den",
                description: "Daniel is thrown into the lion's den for praying to God.",
                reference: "Daniel 6"
            },
            {
                year: "~530 BC",
                event: "Prophecies",
                description: "Daniel receives visions about future kingdoms and the end times.",
                reference: "Daniel 7-12"
            }
        ]
    },
    noah: {
        timeline: [
            {
                year: "~2500 BC",
                event: "God's Warning",
                description: "God warns Noah about the coming flood and instructs him to build an ark.",
                reference: "Genesis 6:13-22"
            },
            {
                year: "~2500 BC",
                event: "Building the Ark",
                description: "Noah builds the ark and gathers animals while the world mocks him.",
                reference: "Genesis 6-7"
            },
            {
                year: "~2500 BC",
                event: "The Flood",
                description: "The flood covers the earth, and Noah's family and the animals are saved.",
                reference: "Genesis 7-8"
            },
            {
                year: "~2500 BC",
                event: "Rainbow Covenant",
                description: "God makes a covenant with Noah, promising never to destroy the earth with a flood again.",
                reference: "Genesis 9:8-17"
            }
        ]
    },
    sarah: {
        timeline: [
            {
                year: "~2000 BC",
                event: "Journey to Canaan",
                description: "Sarah travels with Abraham to the land God promised them.",
                reference: "Genesis 12"
            },
            {
                year: "~1950 BC",
                event: "Promise of a Son",
                description: "God promises Sarah she will have a son, but she laughs in disbelief.",
                reference: "Genesis 18:9-15"
            },
            {
                year: "~1900 BC",
                event: "Birth of Isaac",
                description: "Sarah gives birth to Isaac in her old age.",
                reference: "Genesis 21:1-7"
            },
            {
                year: "~1900 BC",
                event: "Death and Legacy",
                description: "Sarah dies and is buried in the cave of Machpelah.",
                reference: "Genesis 23"
            }
        ]
    },
    samuel: {
        timeline: [
            {
                year: "~1100 BC",
                event: "Birth and Dedication",
                description: "Samuel is born to Hannah and dedicated to serve in the temple.",
                reference: "1 Samuel 1"
            },
            {
                year: "~1090 BC",
                event: "God's Call",
                description: "God calls Samuel as a young boy in the temple.",
                reference: "1 Samuel 3"
            },
            {
                year: "~1050 BC",
                event: "Anoints Saul",
                description: "Samuel anoints Saul as the first king of Israel.",
                reference: "1 Samuel 10"
            },
            {
                year: "~1020 BC",
                event: "Anoints David",
                description: "Samuel anoints David as the future king of Israel.",
                reference: "1 Samuel 16"
            }
        ]
    }
};

// DOM elements
const sections = {
    'main-menu': document.getElementById('main-menu'),
    'character-selection': document.getElementById('character-selection'),
    'quiz-section': document.getElementById('quiz-section'),
    'result': document.getElementById('result'),
    'timeline-section': document.getElementById('timeline-section')
};

// State management
let currentQuestion = 0;
let scores = { david: 0, ruth: 0, abraham: 0, joseph: 0, moses: 0, esther: 0, daniel: 0, noah: 0, sarah: 0, samuel: 0 };
let currentCharacter = null;

// Navigation
function navigateTo(sectionId) {
    // Map data-action values to section IDs
    const sectionMap = {
        'quiz': 'quiz-section',
        'timeline': 'character-selection'
    };
    const mappedSectionId = sectionMap[sectionId] || sectionId;

    // Hide all sections
    Object.values(sections).forEach(section => section.classList.add('hidden'));
    // Show the target section
    sections[mappedSectionId].classList.remove('hidden');

    // Handle section-specific logic
    if (mappedSectionId === 'quiz-section') {
        restartQuiz();
    } else if (mappedSectionId === 'timeline-section') {
        showTimeline(currentCharacter);
    }
}

// Quiz logic
function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    const questionData = quizData[currentQuestion];

    // Update progress
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

    // Render question
    quizDiv.innerHTML = `
        <div class="question">${questionData.question}</div>
        ${questionData.options.map((option, index) => `
            <div class="option" onclick="selectOption(${index})" role="button" tabindex="0" aria-label="${option.text}">${option.text}</div>
        `).join("")}
    `;
    document.getElementById("next-btn").disabled = true;
}

function selectOption(optionIndex) {
    const questionData = quizData[currentQuestion];
    const selectedOption = questionData.options[optionIndex];

    // Update scores
    for (let character in selectedOption.points) {
        scores[character] += selectedOption.points[character];
    }

    // Highlight selected option
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
    document.querySelectorAll(".option")[optionIndex].classList.add("selected");

    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-section").classList.add("hidden");
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");
    const resultContentDiv = document.getElementById("result-content");

    resultDiv.classList.remove("hidden");
    loadingDiv.classList.remove("hidden");
    resultContentDiv.classList.add("hidden");

    setTimeout(() => {
        loadingDiv.classList.add("hidden");
        resultContentDiv.classList.remove("hidden");

        // Calculate result
        let highestScore = 0;
        let resultCharacter = "david";
        for (let character in scores) {
            if (scores[character] > highestScore) {
                highestScore = scores[character];
                resultCharacter = character;
            }
        }
        currentCharacter = resultCharacter;

        // Display result
        document.getElementById("result-text").innerHTML = `
            <p>${results[resultCharacter].description}</p>
            <p><strong>Fun Fact:</strong> ${results[resultCharacter].funFact}</p>
        `;

        // Score breakdown
        const maxScore = quizData.length * 2;
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const breakdownList = document.getElementById("breakdown-list");
        breakdownList.innerHTML = sortedScores.map(([character, score]) => {
            const percentage = (score / maxScore) * 100;
            return `
                <div class="breakdown-item">
                    <span>${results[character].name}: ${score} points</span>
                    <div class="score-bar" style="width: ${percentage}%"></div>
                </div>
            `;
        }).join("");

        // Show timeline
        showTimeline(resultCharacter);
    }, 1500);
}

function restartQuiz() {
    currentQuestion = 0;
    scores = { david: 0, ruth: 0, abraham: 0, joseph: 0, moses: 0, esther: 0, daniel: 0, noah: 0, sarah: 0, samuel: 0 };
    loadQuestion();
}

// Timeline logic
function showTimeline(character) {
    currentCharacter = character;
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = '';

    const characterData = characterStories[character];
    if (!characterData || !characterData.timeline) {
        timeline.innerHTML = '<p>No timeline data available.</p>';
        return;
    }

    characterData.timeline.forEach(event => {
        timeline.innerHTML += `
            <div class="timeline-event">
                <div class="timeline-year">${event.year}</div>
                <div class="timeline-event-title">${event.event}</div>
                <div class="timeline-description">${event.description}</div>
                <div class="timeline-reference">${event.reference}</div>
            </div>
        `;
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('main-menu');

    // Menu options
    document.querySelectorAll('.menu-option').forEach(option => {
        option.addEventListener('click', () => {
            const action = option.getAttribute('data-action');
            navigateTo(action);
        });
        option.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const action = option.getAttribute('data-action');
                navigateTo(action);
            }
        });
    });

    // Character selection
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', () => {
            currentCharacter = card.getAttribute('data-character');
            navigateTo('timeline-section');
        });
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                currentCharacter = card.getAttribute('data-character');
                navigateTo('timeline-section');
            }
        });
    });
});