//////////////////// DAILY CHALLENGE LOGIC ////////////////////


      // I create the interfaces for my challenge object cards

interface TestCase {
    input: string;
    expected: string;
}
interface CardChallenge {
    id: string;
    baseTitle: string;
    title: string;
    category:
        | "Math / Numbers"
        | "Code / Algorithms"
        | "Strings / Stream"
        | "Arrays / Lists"
        | "Objects / HashMap"
        | "API / Fetch"
        | "Async / Promises"
        | "Debug / Bugs"
        | "DOM / UI";
    categorySlug:
        | "math_numbers"
        | "code_algorithms"
        | "strings_stream"
        | "arrays_lists"
        | "objects_hashmap"
        | "api_fetch"
        | "async_promises"
        | "debug_bugs"
        | "dom_ui";
    difficulty: "Easy" | "Medium" | "Hard" | "Expert";
    hackATunaLevel: "Hello, Tuna!" | "Script Sardine" | "Debug Tuna" | "Stack Kraken";
    language: "JavaScript"  | "TypeScript" | "Python" | "Node.js" | "React";
    estimatedMinutes: number;
    xp: number;
    description: string;
    instructions: string[];
    starterCode: string;
    testCases: TestCase[];
    concepts: string[];
    source: "local";
}

    // I create an interface for the user progress

interface UserProgress {
    xp: number;
    level: number;
    streak: number;
    completedChallenges: string[];
}
const defaultProgress: UserProgress = {
    xp: 320,
    level: 4,
    streak: 7,
    completedChallenges: []
};

//////////////////// DECLARE GLOBAL VARIABLES ////////////////////

// I get all my challenges from the JSON on page loading
// I make sure the data in JSON will be viewed as CardChallenge object 

let challenges: CardChallenge[] = [];
async function loadChallenges() {
    try {
        const response = await fetch("./hack-a-tuna-challenges-10800-exercices.json");
        if (!response.ok) {
            throw new Error("Failed to load challenges JSON");
        }
        challenges = await response.json();
        console.log(challenges);
        renderSavedGeneratedChallenges();
    } catch (error) {
        console.error("Error while loading challenges:", error);
    }

}


// BUTTON generate new challenge 

const btnGenerateChallenge = document.getElementById("btnGenerateChallenge") as HTMLButtonElement;


// IMAGES REFERENCES
// I use a Record type to make sure I'm not missing or adding category slugs and to avoid typos.

const iconByCategory: Record<CardChallenge["categorySlug"], string> = {
    math_numbers: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780253362/math_number_mex5ml.webp",
    code_algorithms: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252341/code_algorythm_wbgrlm.webp",
    strings_stream: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252339/string_stream_xfwjbv.webp",
    arrays_lists: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252338/lists_array_yusleu.webp",
    objects_hashmap: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252340/data_cache_awwhpw.webp",
    api_fetch: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252336/api_fetch_oljhqf.webp",
    async_promises: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252335/async_promise_tuteao.webp",
    debug_bugs: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252335/debug_fix_jr6zfk.webp",
    dom_ui: "https://res.cloudinary.com/dfsdomppx/image/upload/v1780252334/DOM_UI_hfpatv.webp",
};



//////////////////// USER PROGRESS LOCAL STORAGE ////////////////////

   // LOAD the user progress in localStorage

function loadUserProgress(): UserProgress {
    const savedProgress = localStorage.getItem("hackATunaProgress");
    if (!savedProgress) {
        return defaultProgress;
    }
    return JSON.parse(savedProgress) as UserProgress;
};

  // SAVE the user progress in localStorage

function saveUserProgress(progress: UserProgress): void {
    localStorage.setItem("hackATunaProgress", JSON.stringify(progress));
};
let userProgress: UserProgress = loadUserProgress();


// UPDATE the user progress IN THE UI

function updateProgressUI(): void {
    const currentPoints = document.getElementById("currentPoints") as HTMLParagraphElement;
    const currentLevel = document.querySelector(".currentLevel") as HTMLParagraphElement;
    const strong7 = document.querySelector(".strong7") as HTMLElement;
    currentPoints.textContent = String(userProgress.xp);
    currentLevel.textContent = `Level ${userProgress.level}`;
    strong7.textContent = String(userProgress.streak);
}
updateProgressUI();


// Quick hackathon validation based on the AI feedback text.
// Fragile on purpose: it checks if GPT wrote "Verdict: Correct".
// If the challenge is correct, XP is added and the challenge id is saved as completed.
function isAiFeedbackCorrect(feedback: string): boolean {
    const normalizedFeedback = feedback.toLowerCase().replace(/\s+/g, " ");
    return normalizedFeedback.includes("verdict: correct") &&
        !normalizedFeedback.includes("almost correct") &&
        !normalizedFeedback.includes("needs work");
}

function completeCurrentChallengeWithAiFeedback(feedback: string): string {
    if (!currentChallenge || !isAiFeedbackCorrect(feedback)) {
        return "";
    }
    if (userProgress.completedChallenges.includes(currentChallenge.id)) {
        return `\n\n✅ Challenge already completed before.`;
    }
    userProgress.xp += currentChallenge.xp;
    userProgress.completedChallenges.push(currentChallenge.id);
    saveUserProgress(userProgress);
    updateProgressUI();

    return `\n\n✅ Challenge completed! +${currentChallenge.xp} XP`;
}


//////////////////// CURRENT CHALLENGE STATE ////////////////////

// keep track of the CURRENT CHALLENGE in the workspace
// either a card challenge's object or null.

let currentChallenge: CardChallenge | null = null;



//////////////////// GENERATED CHALLENGES LOCAL STORAGE ////////////////////


// LOCAL STORAGE KEY - keep track of the generated challenges

const GENERATED_CHALLENGES_STORAGE_KEY = "hackATunaGeneratedChallengeIds";


// READING & PARSING the generated challenged IDs in local storage.
// ===> RETURN ARRAY OF STRINGS (challenge id's) or empty array if nothing in local storage or if parsing fails for any reason.

function getSavedGeneratedChallengeIds(): string[] {
    const savedChallengeIds = localStorage.getItem(GENERATED_CHALLENGES_STORAGE_KEY);
    if (!savedChallengeIds) {
        return [];
    }
    try {
        return JSON.parse(savedChallengeIds) as string[];
    } catch {
        return [];
    }
}


// SAVING GENERATED IDs in local storage, if not already saved.

function saveGeneratedChallengeId(challengeId: string): void {
    const savedChallengeIds = getSavedGeneratedChallengeIds();
    if (savedChallengeIds.includes(challengeId)) {
        return;
    }
    savedChallengeIds.push(challengeId);
    localStorage.setItem(GENERATED_CHALLENGES_STORAGE_KEY, JSON.stringify(savedChallengeIds));
}


// REMOVING GENERATED IDs from local storage.

function removeGeneratedChallengeId(challengeId: string): void {
    const savedChallengeIds = getSavedGeneratedChallengeIds();
    const updatedChallengeIds = savedChallengeIds.filter((savedId) => {
        return savedId !== challengeId;
    });
    localStorage.setItem(GENERATED_CHALLENGES_STORAGE_KEY, JSON.stringify(updatedChallengeIds));
}


// CHALLENGE CARD SEARCH function by ID - find challenge object from the IS's saved in local storage.

function findChallengeById(challengeId: string): CardChallenge | undefined {
    return challenges.find((challenge) => {
        return challenge.id === challengeId;
    });
}


// DISPLAY SAVED GENERATED CHALLENGES - when Page loads or when a card is deleted

function renderSavedGeneratedChallenges(): void {
    const endlessGrid = document.querySelector(".endlessGrid") as HTMLDivElement;
    endlessGrid.innerHTML = "";

    const savedChallengeIds = getSavedGeneratedChallengeIds();

    savedChallengeIds.forEach((challengeId) => {
        const savedChallenge = findChallengeById(challengeId);

        if (savedChallenge) {
            displayChallengeCard(savedChallenge, false);
        }
    });
}



//////////////////// CHALLENGE GENERATION LOGIC ////////////////////

// CREATE A NEW CARD challenge

function createNewCard(): CardChallenge | undefined {
    // Get the selection of filters before generating the challenge
    const filterLanguage = document.getElementById("languageFilter") as HTMLSelectElement;
    const filterTopic = document.getElementById("topicFilter") as HTMLSelectElement;
    const filterDifficulty = document.getElementById("difficultyFilter") as HTMLSelectElement;
    
    // Apply filters to get a random card based on a filter function over my 1,800 challenges objects
    const filteredChallenges = challenges.filter((challenge: CardChallenge) => {
        // I keep the challenge whatever the challenge is IF filter is on All or I choose the selected value
        const matchLanguage = filterLanguage.value === "All" || challenge.language === filterLanguage.value;
        const matchTopic = filterTopic.value === "All" || challenge.category === filterTopic.value;
        const matchDifficulty = filterDifficulty.value === "All" || challenge.difficulty === filterDifficulty.value;

        return matchLanguage && matchTopic && matchDifficulty
    });
    // IT SHOULD NOT BE POSSIBLE.. BUT JUST TO BE SURE ...I add this case
    if (filteredChallenges.length === 0) {
        console.log("No challenge found for these filters, yet");
        return;
}

    const randomIndex = Math.floor(Math.random() * filteredChallenges.length);
    const newCard = filteredChallenges[randomIndex];
    return newCard
}



//////////////////// CHALLENGE CARD DISPLAY LOGIC ////////////////////

//DISPLAY ONE CHALLENGE CARD in the UI

function displayChallengeCard(challengeCard: CardChallenge, shouldSaveChallenge: boolean = true): void  {
    
    const endlessGrid = document.querySelector(".endlessGrid") as HTMLDivElement;
    // Main card
    const endlessItem = document.createElement("div");
    endlessItem.classList.add("endlessItem");
    // Image
    const iconImg = document.createElement("img");
    iconImg.classList.add("endlessIconImg");
    iconImg.src = iconByCategory[challengeCard.categorySlug];
    iconImg.alt = `${challengeCard.category} icon`;
    // visual column (for design purposes only)
    const endlessVisualColumn = document.createElement("div");
    endlessVisualColumn.classList.add("endlessVisualColumn");
    // Content container
    const endlessContent = document.createElement("div");
    endlessContent.classList.add("endlessContent");
    // Badges container
    const endlessBadges = document.createElement("div");
    endlessBadges.classList.add("endlessBadges");
    // Difficulty badge
    const difficultyBadge = document.createElement("span");
    difficultyBadge.classList.add("difficultyBadge");
    difficultyBadge.textContent = challengeCard.difficulty;
    if (challengeCard.difficulty === "Easy") {
        difficultyBadge.classList.add("easyBadge");
    } else if (challengeCard.difficulty === "Medium") {
        difficultyBadge.classList.add("mediumBadge");
    } else if (challengeCard.difficulty === "Hard") {
       difficultyBadge.classList.add("hardBadge");
    } else if (challengeCard.difficulty === "Expert") {
        difficultyBadge.classList.add("expertBadge");
    }
    // Language badge
    const languageBadge = document.createElement("span");
    languageBadge.classList.add("languageBadge");
    languageBadge.textContent = challengeCard.language;
    // Title
    const title = document.createElement("h3");
    title.textContent = challengeCard.title;
    // Description
    const description = document.createElement("p");
    description.textContent = challengeCard.description;
    // Meta container
    const endlessMeta = document.createElement("div");
    endlessMeta.classList.add("endlessMeta");
    // Time
    const timeSpan = document.createElement("span");
    timeSpan.textContent = `⏱ ~${challengeCard.estimatedMinutes} min`;
    // Concepts
    const conceptsSpan = document.createElement("span");
    conceptsSpan.textContent = challengeCard.concepts.join(", ");
    // Start button
    const startButton = document.createElement("button");
    startButton.classList.add("startChallengeBtn");
    startButton.dataset.challengeId = challengeCard.id;
    startButton.textContent = "Start Challenge";
    startButton.addEventListener("click", () => {
        openChallengeWorkspace(challengeCard);
    });
    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteChallengeBtn");
    deleteButton.type = "button";
    deleteButton.textContent = "✕";
    deleteButton.setAttribute("aria-label", "Delete challenge card");
    deleteButton.addEventListener("click", () => {
        endlessItem.remove();
        removeGeneratedChallengeId(challengeCard.id);
    });

    // Assemble badges
    endlessBadges.appendChild(difficultyBadge);
    endlessBadges.appendChild(languageBadge);
    // Assemble meta
    endlessMeta.appendChild(timeSpan);
    endlessMeta.appendChild(conceptsSpan);
    // Assemble content
    endlessContent.appendChild(endlessBadges);
    endlessContent.appendChild(title);
    endlessContent.appendChild(description);
    endlessContent.appendChild(endlessMeta);
    endlessContent.appendChild(startButton);
    // Assemble card
    endlessVisualColumn.appendChild(iconImg);
    endlessVisualColumn.appendChild(deleteButton);
    endlessItem.appendChild(endlessVisualColumn);
    endlessItem.appendChild(endlessContent);
    // Add card to grid
    endlessGrid.appendChild(endlessItem);
    if (shouldSaveChallenge) {
    saveGeneratedChallengeId(challengeCard.id);
}
}



// GENERATE & DISPLAY NEW RANDOM challenge card.

function displayNewCard(): void {
    if (challenges.length === 0) {
        console.log("Challenges are still loading...");
        return;
    }
    const newCard = createNewCard();
    if (!newCard) {
        return;
    }
    console.log(newCard);
    displayChallengeCard(newCard);
}
loadChallenges();

// GENERATE A NEW RANDOM CARD challenge on click

btnGenerateChallenge.addEventListener("click", ev =>{
    ev.preventDefault();
    displayNewCard();
});

//////// DISPLAYING CHALLENGE'S WORKSPACE //////////////////////

     // I create a function to open the workspace when clickiing on the Start Challenge button.
     // return void because It's just an action that changes the UI.
     // Entire workspace is already designed/structered in HTML.
function openChallengeWorkspace(challenge: CardChallenge): void {
    const dashboardGrid = document.querySelector(".dashboardGrid") as HTMLElement;
    const endlessCard = document.querySelector(".endlessCard") as HTMLElement;
    const challengeWorkspace = document.getElementById("challengeWorkspace") as HTMLElement;
    const workspaceMeta = document.getElementById("workspaceMeta") as HTMLParagraphElement;
    const workspaceTitle = document.getElementById("workspaceTitle") as HTMLHeadingElement;
    const workspaceDescription = document.getElementById("workspaceDescription") as HTMLParagraphElement;
    const workspaceXp = document.getElementById("workspaceXp") as HTMLDivElement;
    const workspaceLanguageBadge = document.getElementById("workspaceLanguageBadge") as HTMLSpanElement;
    const workspaceInstructionsList = document.getElementById("workspaceInstructionsList") as HTMLUListElement;
    const workspaceConcepts = document.getElementById("workspaceConcepts") as HTMLDivElement;
    const workspaceTestCases = document.getElementById("workspaceTestCases") as HTMLDivElement;
    const codeEditor = document.getElementById("codeEditor") as HTMLTextAreaElement;
    const consoleOutput = document.getElementById("consoleOutput") as HTMLDivElement;
    const heroBanner = document.querySelector(".heroBanner") as HTMLElement;
    
    // Just an "Hide and Seek" game with CSS classes to show the workspace and hide the dashboard.
    heroBanner.classList.add("hidden");
    dashboardGrid.classList.add("hidden");
    endlessCard.classList.add("hidden");
    challengeWorkspace.classList.remove("hidden");

    // I set the current challenge to the one I just clicked on.
    currentChallenge = challenge;

    // Customization of the workspace with the challenge's data
    workspaceMeta.textContent = `${challenge.category} · ${challenge.language} · ${challenge.difficulty} · ${challenge.estimatedMinutes} min`;
    workspaceTitle.textContent = challenge.title;
    workspaceDescription.textContent = challenge.description;
    workspaceXp.textContent = `+${challenge.xp} XP`;
    workspaceLanguageBadge.textContent = challenge.language;
    codeEditor.value = challenge.starterCode;
    consoleOutput.textContent = "No output yet.";
    // I use a forEach loop to populate the challenge's instruction as a UI list 
    workspaceInstructionsList.innerHTML = "";
    challenge.instructions.forEach((instruction: string) => {
        const li = document.createElement("li");
        li.textContent = instruction;
        workspaceInstructionsList.appendChild(li);
    });
    // and same for displaying the concept's pills
    workspaceConcepts.innerHTML = "";
    challenge.concepts.forEach((concept: string) => {
        const conceptPill = document.createElement("span");
        conceptPill.classList.add("conceptPill");
        conceptPill.textContent = concept;
        workspaceConcepts.appendChild(conceptPill);
    });

    workspaceTestCases.innerHTML = "";
    challenge.testCases.forEach((testCase: TestCase) => {
        const testCaseBox = document.createElement("div");
        testCaseBox.classList.add("testCaseBox");
        testCaseBox.innerHTML = `
            <strong>Input:</strong> ${testCase.input}<br>
            <strong>Expected:</strong> ${testCase.expected}
        `;
        workspaceTestCases.appendChild(testCaseBox);
    });
}

// Button to go back to dashboard from worskpace
const backToChallengesBtn = document.getElementById("backToChallengesBtn") as HTMLButtonElement;

backToChallengesBtn.addEventListener("click", () => {
    const heroBanner = document.querySelector(".heroBanner") as HTMLElement;
    const dashboardGrid = document.querySelector(".dashboardGrid") as HTMLElement;
    const endlessCard = document.querySelector(".endlessCard") as HTMLElement;
    const challengeWorkspace = document.getElementById("challengeWorkspace") as HTMLElement;

    heroBanner.classList.remove("hidden");
    challengeWorkspace.classList.add("hidden");
    dashboardGrid.classList.remove("hidden");
    endlessCard.classList.remove("hidden");
});



//////////////////// AI CHALLENGE CHECKER LOGIC ////////////////////

// This interface describes the full data sent to my Supabase Edge Function.
// It contains the current challenge information + the code written by the user.
interface AiCheckPayload {
    id: string;
    title: string;
    baseTitle: string;
    category: CardChallenge["category"];
    categorySlug: CardChallenge["categorySlug"];
    difficulty: CardChallenge["difficulty"];
    hackATunaLevel: CardChallenge["hackATunaLevel"];
    language: CardChallenge["language"];
    estimatedMinutes: number;
    xp: number;
    description: string;
    instructions: string[];
    starterCode: string;
    testCases: TestCase[];
    concepts: string[];
    userCode: string;
}

// This interface describes what I expect to receive back from the Edge Function.
interface AiCheckResponse {
    feedback: string;
}

// Supabase Edge Function URL.
// This is the endpoint that receives the challenge + user code and calls GPT.
const SUPABASE_CHECK_CODE_URL = "https://qebjfinibbslqxtbbewr.supabase.co/functions/v1/check-code";

// Supabase anon public key.
// Replace this with your Supabase anon key from Project Settings → API.
const SUPABASE_ANON_KEY = "sb_publishable_MmwfQyQxRy_36Vpj1lekxw_p4EORBIK";

// Demo key used to protect the Edge Function a little bit during the hackathon.
// This must match the HACK_A_TUNA_DEMO_KEY secret in Supabase.
const HACK_A_TUNA_DEMO_KEY = "hack-a-tuna-demo-2026";

// This function builds the object that will be sent to Supabase/GPT.
function buildAiCheckPayload(challenge: CardChallenge, userCode: string): AiCheckPayload {
    return {
        id: challenge.id,
        title: challenge.title,
        baseTitle: challenge.baseTitle,
        category: challenge.category,
        categorySlug: challenge.categorySlug,
        difficulty: challenge.difficulty,
        hackATunaLevel: challenge.hackATunaLevel,
        language: challenge.language,
        estimatedMinutes: challenge.estimatedMinutes,
        xp: challenge.xp,
        description: challenge.description,
        instructions: challenge.instructions,
        starterCode: challenge.starterCode,
        testCases: challenge.testCases,
        concepts: challenge.concepts,
        userCode: userCode,
    };
}

// Button used to submit the user's code to the AI checker.
const submitChallengeBtn = document.getElementById("submitChallengeBtn") as HTMLButtonElement;

submitChallengeBtn.addEventListener("click", async () => {
    // If no challenge is currently opened, there is nothing to submit.
    if (!currentChallenge) {
        console.log("No challenge selected.");
        return;
    }
    const codeEditor = document.getElementById("codeEditor") as HTMLTextAreaElement;
    const consoleOutput = document.getElementById("consoleOutput") as HTMLDivElement;
    const userCode = codeEditor.value.trim();

    // Prevent empty submissions.
    if (!userCode) {
        consoleOutput.textContent = "Please write some code before submitting your challenge.";
        return;
    }

    // Create the full payload sent to the Edge Function.
    const aiPayload = buildAiCheckPayload(currentChallenge, userCode);
    console.log("Payload sent to AI checker:", aiPayload);
    consoleOutput.textContent = "Checking your code with AI...";
    try {
        const response = await fetch(SUPABASE_CHECK_CODE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_ANON_KEY,
                "x-demo-key": HACK_A_TUNA_DEMO_KEY,
            },
            body: JSON.stringify(aiPayload),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`AI checker request failed: ${response.status} - ${errorText}`);
        }
        const data = await response.json() as AiCheckResponse;
        const completionMessage = completeCurrentChallengeWithAiFeedback(data.feedback);
        consoleOutput.textContent = data.feedback + completionMessage;
    } catch (error) {
        console.error("AI checker error:", error);
        consoleOutput.textContent = `Error while checking the code: ${error}`;
    }
});
