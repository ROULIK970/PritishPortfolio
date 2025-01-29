import { Router } from "express";
import ensureAuthenticatedRoute from "../Middleware/auth.js";
import {chat} from "../Controllers/chat.controller.js"

const router = Router();

router.get("/chat", ensureAuthenticatedRoute, chat);

export default router;
