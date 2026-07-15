import ai from "../config/gemini.js";
import {
  buildAnalysisPrompt,
  buildChatPrompt,
} from "../services/promptService.js";
// Cache previous analyses
const analysisCache = new Map();
// Analyze Selected Text
async function generateWithRetry(prompt, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-flash-latest",
        contents: prompt,
      });

      return response;
    } catch (error) {
      // Retry only if Gemini is temporarily unavailable
      if ((error.status === 429 || error.status === 503) && i < retries - 1) {
        console.log(`Gemini busy. Retrying (${i + 1}/${retries})...`);
        const delays = [1000, 3000, 5000];

await new Promise((resolve) =>
    setTimeout(resolve, delays[i])
);
        continue;
      }

      throw error;
    }
  }
}
export async function analyzeText(req, res) {
  try {
    const { text, goal } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text is required.",
      });
    }

    const cacheKey = `${goal || "Quick Understanding"}::${text}`;

if (analysisCache.has(cacheKey)) {
  console.log("Returning cached result...");
  return res.json(analysisCache.get(cacheKey));
}

const prompt = buildAnalysisPrompt(
  text,
  goal || "Quick Understanding"
);
    const response = await generateWithRetry(prompt);

    const raw = response.text.trim();

    let result;

    try {
      result = JSON.parse(raw);
    } catch {
      return res.status(500).json({
        error: "Gemini returned invalid JSON.",
        raw,
      });
    }

    analysisCache.set(cacheKey, result);

res.json(result);
  } catch (error) {
    console.error(error);

    

res.status(error.status || 500).json({
  success: false,
  error: error.message || "Failed to analyze text.",
});
  }
}

// Chat

export async function chat(req, res) {
  try {
    const { context, question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Question is required.",
      });
    }

    const prompt = buildChatPrompt(
      context || "",
      question
    );

    const response = await generateWithRetry(prompt);

    res.json({
      answer: response.text.trim(),
    });
  } catch (error) {
    console.error(error);

    

res.status(error.status || 500).json({
  success: false,
  error:
  error.status === 429
    ? "AI is receiving many requests. Please try again in a few seconds."
    : error.status === 503
    ? "AI service is temporarily busy."
    : "Failed to analyze text.",
});
  }
}
export async function translate(req, res) {

    try {

        const { text, language } = req.body;

        const response = await ai.models.generateContent({

            model: "gemini-flash-latest",

            contents: `
Translate the following text into ${language}.

Keep the meaning exactly the same.

Return ONLY the translated text.

${text}
`

        });

        res.json({

            translation: response.text.trim()

        });

    }

    catch (error) {

        res.status(500).json({

            error: "Translation failed."

        });

    }

}