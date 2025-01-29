import {Router} from 'express'
import { signup, login } from '../Controllers/auth.controller.js';
import { signUpValidation, loginValidation } from '../Middleware/auth.validation.js';


const router = Router()


router.post('/signup', signUpValidation , signup)
router.post("/login", loginValidation , login);


export default router