import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import aiRoutes from "./routes/aiRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SimplifAI Backend is Running 🚀",
  });
});

// API Routes
app.use("/api/ai", aiRoutes);

export default app;