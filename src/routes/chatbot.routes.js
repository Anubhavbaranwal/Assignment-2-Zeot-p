import { Router } from "express";
import { askQuestion } from "../controllers/chatbot.controller.js";

const router = Router();

router.post('/ask', askQuestion);


export default router;