console.log("popup.js loaded");
const selectedText = document.getElementById("selectedText");
const analyzeBtn = document.getElementById("analyzeBtn");
const loading = document.getElementById("loading");
const result = document.getElementById("result");
const loadingText = document.getElementById("loadingText");
const translateBtn = document.getElementById("translateBtn");
const language = document.getElementById("language");
const loadingSteps = [
  "🧠 Reading text...",
  "📖 Understanding context...",
  "✨ Simplifying concepts...",
  "🎯 Extracting key concepts...",
  "🤖 Preparing response..."
];

let loadingInterval;
const simplified = document.getElementById("simplified");
const summary = document.getElementById("summary");
const concepts = document.getElementById("concepts");
const difficulty = document.getElementById("difficulty");
const readingGoal = document.getElementById("readingGoal");

const askBtn = document.getElementById("askBtn");
const question = document.getElementById("question");
const pdfUpload = document.getElementById("pdfUpload");
const pdfStatus = document.getElementById("pdfStatus");
const messages = document.getElementById("messages");

let context = "";

// Load selected text
chrome.storage.local.get("selectedText", (data) => {
  if (data.selectedText) {
    selectedText.value = data.selectedText;
  }
});

// ----------------------------
// Analyze
// ----------------------------

analyzeBtn.addEventListener("click", async () => {
  console.log("Analyze button clicked");
  if (!selectedText.value.trim()) {
    alert("Highlight some text first.");
    return;
  }
clearInterval(loadingInterval);
  loading.classList.remove("hidden");
  result.classList.add("hidden");
  console.log("Starting API request...");

  try {
    console.log("Sending fetch request...");
    const response = await fetch("http://localhost:5000/api/ai/analyze", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        text: selectedText.value,
        goal: document.getElementById("goal").value
      })

    });

    const data = await response.json();
    if (!response.ok) {
    throw new Error(data.error || "Backend error");
}
    console.log("Response received:", data);

    simplified.textContent = data.simplified;
    summary.textContent = data.summary;
    difficulty.textContent = data.difficulty;
    readingGoal.textContent = data.readingGoal;

    context = `
${data.simplified}

${data.summary}
`;

    concepts.innerHTML = "";
    if (Array.isArray(data.keyConcepts)) {

    data.keyConcepts.forEach((item) => {

        const chip = document.createElement("div");

        chip.className = "concept";

        chip.innerHTML = `
            <strong>${item.term}</strong><br>
            <small>${item.shortExplanation}</small>
        `;

        concepts.appendChild(chip);

    });

}

    

    messages.innerHTML = "";

    loading.classList.add("hidden");
    result.classList.remove("hidden");

  } catch (err) {
    clearInterval(loadingInterval);
    loading.classList.add("hidden");

    alert(err.message);

    console.error(err);

  }

});

// ----------------------------
// Ask AI
// ----------------------------

askBtn.addEventListener("click", async () => {

  const q = question.value.trim();

  if (!q) return;

  addUserMessage(q);

  question.value = "";

  addAIMessage("Thinking...");

  try {
    let i = 0;

loadingText.textContent = loadingSteps[0];

loadingInterval = setInterval(() => {
  i = (i + 1) % loadingSteps.length;
  loadingText.textContent = loadingSteps[i];
}, 900);
    const response = await fetch("http://localhost:5000/api/ai/chat", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        context,

        question: q

      })

    });

    const data = await response.json();

    const thinking = messages.lastChild;

    thinking.remove();

    addAIMessage(data.answer);

  }

  catch {

    messages.lastChild.remove();

    addAIMessage("Sorry, I couldn't answer that.");

  }

});

// ----------------------------

function addUserMessage(text) {

  const div = document.createElement("div");

  div.className = "message user";

  div.innerHTML = `<span>${text}</span>`;

  messages.appendChild(div);

  scrollBottom();

}

// ----------------------------

function addAIMessage(text) {

  const div = document.createElement("div");

  div.className = "message ai";

  div.innerHTML = `<span>${text}</span>`;

  messages.appendChild(div);

  scrollBottom();

}

// ----------------------------

function scrollBottom() {

  messages.scrollTop = messages.scrollHeight;

}
translateBtn.addEventListener("click", async () => {

    if (!simplified.textContent.trim()) return;

    translateBtn.disabled = true;
    translateBtn.textContent = "...";

    try {

        const response = await fetch(
            "http://localhost:5000/api/ai/translate",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    text: simplified.textContent,

                    language: language.value

                })

            }
        );

        const data = await response.json();

        simplified.textContent = data.translation;

    } catch {

        alert("Translation failed.");

    }

    translateBtn.disabled = false;
    translateBtn.textContent = "Translate";

});