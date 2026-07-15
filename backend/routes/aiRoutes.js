import express from "express";
import { analyzeText, chat, translate } from "../controllers/aiController.js";

const router = express.Router();

// Analyze selected text
router.post("/analyze", analyzeText);

// AI Chat
router.post("/chat", chat);
router.post("/translate", translate);

export default router;