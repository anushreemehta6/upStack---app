import express from "express";
import { login, logout, signup ,ownCourse} from "../controller/user.controller.js";
import userMiddleware from '../middleware/user.mid.js';
const router = express.Router();
router.post("/signup", signup)
router.post("/login", login)
router.get("/logout",logout)
router.get("/purchased",userMiddleware, ownCourse)

export default router 