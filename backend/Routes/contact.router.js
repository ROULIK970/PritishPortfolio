import { Router } from "express";
import { contact } from "../Controllers/contact.controller.js";
import { contactValidation } from "../Middleware/auth.validation.js";

const router = Router();

router.post("/", contactValidation, contact);

export default router;
