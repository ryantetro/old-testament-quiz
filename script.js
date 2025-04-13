// Quiz data: questions and possible results
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
        question: "You’re tasked with leading a group through a tough situation. What’s your approach?",
        options: [
            { text: "I take charge and inspire others with my confidence.", points: { david: 2, moses: 1, esther: 1 } },
            { text: "I listen to everyone’s input before deciding.", points: { samuel: 2, joseph: 1, sarah: 1 } },
            { text: "I pray or reflect deeply before acting.", points: { daniel: 2, noah: 1, abraham: 1 } },
            { text: "I support the group emotionally and keep them united.", points: { ruth: 2, esther: 1, moses: 1 } },
        ],
    },
    {
        question: "What’s your ideal way to spend a free day?",
        options: [
            { text: "Exploring nature or going on an adventure.", points: { david: 2, noah: 1, abraham: 1 } },
            { text: "Spending quality time with family or friends.", points: { ruth: 2, sarah: 1, esther: 1 } },
            { text: "Reading, learning, or solving problems.", points: { daniel: 2, joseph: 1, samuel: 1 } },
            { text: "Reflecting quietly or meditating.", points: { moses: 2, abraham: 1, noah: 1 } },
        ],
    },
    {
        question: "What’s most important to you in life?",
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
            { text: "I’m warm and welcoming, eager to connect.", points: { ruth: 2, esther: 1, sarah: 1 } },
            { text: "I’m cautious but respectful until I know them better.", points: { daniel: 2, samuel: 1, noah: 1 } },
            { text: "I take the lead and make them feel included.", points: { david: 2, moses: 1, joseph: 1 } },
            { text: "I observe quietly before engaging.", points: { abraham: 2, sarah: 1, moses: 1 } },
        ],
    },
    {
        question: "What’s your biggest dream or goal?",
        options: [
            { text: "To lead or inspire others to greatness.", points: { david: 2, moses: 1, esther: 1 } },
            { text: "To build a lasting legacy or family.", points: { abraham: 2, sarah: 1, ruth: 1 } },
            { text: "To overcome challenges and rise to the top.", points: { joseph: 2, noah: 1, daniel: 1 } },
            { text: "To live a life of purpose and faith.", points: { samuel: 2, daniel: 1, moses: 1 } },
        ],
    },
    {
        question: "What’s your go-to way to cheer someone up?",
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

// Possible results
const results = {
    david: {
        name: "David",
        description: "You’re like David—brave, passionate, and a natural leader. You face challenges with courage and have a heart for those you care about.",
        funFact: "Did you know David defeated the giant Goliath with just a sling and a stone? (1 Samuel 17)",
    },
    ruth: {
        name: "Ruth",
        description: "You’re like Ruth—loyal, bold, and full of faith. You form deep connections and stand by those you love no matter what.",
        funFact: "Ruth’s loyalty to Naomi led her to say, ‘Where you go, I will go’ (Ruth 1:16).",
    },
    abraham: {
        name: "Abraham",
        description: "You’re like Abraham—patient, faithful, and trusting. You have a strong sense of purpose and believe in a greater plan.",
        funFact: "Abraham was 100 years old when his son Isaac was born! (Genesis 21:5)",
    },
    joseph: {
        name: "Joseph",
        description: "You’re like Joseph—adaptable, strategic, and resilient. You thrive in tough situations and always find a way to come out on top.",
        funFact: "Joseph interpreted Pharaoh’s dreams and saved Egypt from famine (Genesis 41).",
    },
    moses: {
        name: "Moses",
        description: "You’re like Moses—obedient, humble, and a mediator. You feel a deep responsibility to guide others and follow a higher calling.",
        funFact: "Moses parted the Red Sea to lead the Israelites to freedom (Exodus 14).",
    },
    esther: {
        name: "Esther",
        description: "You’re like Esther—courageous, wise, and selfless. You’re willing to take risks for the greater good and stand up for what’s right.",
        funFact: "Esther risked her life to save her people from a plot to destroy them (Esther 4).",
    },
    daniel: {
        name: "Daniel",
        description: "You’re like Daniel—wise, disciplined, and unwavering in faith. You seek understanding and remain steadfast even in tough times.",
        funFact: "Daniel survived a night in a lions’ den because of his faith (Daniel 6).",
    },
    noah: {
        name: "Noah",
        description: "You’re like Noah—obedient, diligent, and trusting. You follow through on what you believe is right, no matter how big the task.",
        funFact: "Noah built an ark that saved his family and the animals from the flood (Genesis 6-9).",
    },
    sarah: {
        name: "Sarah",
        description: "You’re like Sarah—hopeful, supportive, but sometimes doubtful. You dream big and remain loyal, even when the path is unclear.",
        funFact: "Sarah laughed when God told her she’d have a child in her old age (Genesis 18:12).",
    },
    samuel: {
        name: "Samuel",
        description: "You’re like Samuel—devout, discerning, and attentive. You listen closely to your instincts and strive to live with integrity.",
        funFact: "Samuel heard God’s voice as a young boy while serving in the temple (1 Samuel 3).",
    },
};

// Track quiz state
let currentQuestion = 0;
let scores = { david: 0, ruth: 0, abraham: 0, joseph: 0, moses: 0, esther: 0, daniel: 0, noah: 0, sarah: 0, samuel: 0 };

// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
    const quizDiv = document.getElementById("quiz");
    const questionData = quizData[currentQuestion];

    // Update progress bar
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    document.getElementById("progress-bar").style.width = `${progress}%`;
    document.getElementById("progress-text").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

    // Create question HTML
    quizDiv.innerHTML = `
        <div class="question">${questionData.question}</div>
        ${questionData.options
            .map(
                (option, index) => `
                    <div class="option" onclick="selectOption(${index})">${option.text}</div>
                `
            )
            .join("")}
    `;

    // Hide the "Next" button until an option is selected
    document.getElementById("next-btn").disabled = true;
}

// Function to handle option selection
function selectOption(optionIndex) {
    const questionData = quizData[currentQuestion];
    const selectedOption = questionData.options[optionIndex];

    // Update scores
    for (let character in selectedOption.points) {
        scores[character] += selectedOption.points[character];
    }

    // Highlight the selected option
    const options = document.querySelectorAll(".option");
    options.forEach((option) => option.classList.remove("selected"));
    options[optionIndex].classList.add("selected");

    // Enable the "Next" button
    document.getElementById("next-btn").disabled = false;
}

// Function to go to the next question or show the result
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to calculate and show the result
function showResult() {
    console.log("Starting showResult...");

    // Hide quiz elements
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    document.getElementById("progress-container").classList.add("hidden");

    // Show the result section and loading spinner
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");
    const resultContentDiv = document.getElementById("result-content");

    console.log("Result div before:", resultDiv.classList);
    console.log("Loading div before:", loadingDiv.classList);
    console.log("Result content div before:", resultContentDiv.classList);

    resultDiv.classList.remove("hidden");
    loadingDiv.classList.remove("hidden");
    resultContentDiv.classList.add("hidden"); // Ensure result content is hidden initially

    // Fallback: Explicitly set display styles
    resultDiv.style.display = "block";
    loadingDiv.style.display = "flex";
    resultContentDiv.style.display = "none";

    setTimeout(() => {
        console.log("Inside setTimeout...");

        // Hide the loading spinner
        loadingDiv.classList.add("hidden");
        loadingDiv.style.display = "none"; // Fallback
        console.log("Loading div after hiding:", loadingDiv.classList);
        console.log("Loading div display:", loadingDiv.style.display);

        // Show the result content
        resultContentDiv.classList.remove("hidden");
        resultContentDiv.style.display = "block"; // Fallback
        console.log("Result content div after showing:", resultContentDiv.classList);
        console.log("Result content div display:", resultContentDiv.style.display);

        // Find the character with the highest score
        let highestScore = 0;
        let resultCharacter = "david";
        for (let character in scores) {
            if (scores[character] > highestScore) {
                highestScore = scores[character];
                resultCharacter = character;
            }
        }

        // Display the result
        const resultText = document.getElementById("result-text");
        resultText.innerHTML = `
            <p>${results[resultCharacter].description}</p>
            <p><strong>Fun Fact:</strong> ${results[resultCharacter].funFact}</p>
        `;

        // Calculate maximum possible score (2 points per question, 10 questions)
        const maxScore = quizData.length * 2;

        // Sort characters by score (highest to lowest)
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

        // Display score breakdown
        const breakdownList = document.getElementById("breakdown-list");
        breakdownList.innerHTML = "";
        sortedScores.forEach(([character, score]) => {
            const percentage = (score / maxScore) * 100;
            breakdownList.innerHTML += `
                <div class="breakdown-item">
                    <span>${results[character].name}: ${score} points</span>
                    <div class="score-bar" style="width: ${percentage}%"></div>
                </div>
            `;
        });

        console.log("Result display complete.");
    }, 2000); // 2-second delay for the loading animation
}

// Function to share the result
function shareResult() {
    const resultText = document.getElementById("result-text").textContent;
    const shareMessage = `${resultText} Take the quiz to find out which Old Testament figure you are!`;
    if (navigator.share) {
        navigator.share({
            title: "Which Old Testament Figure Are You?",
            text: shareMessage,
            url: window.location.href,
        });
    } else {
        alert("Share this result: " + shareMessage + " " + window.location.href);
    }
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    scores = { david: 0, ruth: 0, abraham: 0, joseph: 0, moses: 0, esther: 0, daniel: 0, noah: 0, sarah: 0, samuel: 0 };
    document.getElementById("quiz").classList.remove("hidden");
    document.getElementById("next-btn").classList.remove("hidden");
    document.getElementById("progress-container").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
}