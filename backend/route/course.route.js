import express from 'express'
import { createcourse, getcource } from '../controller/course.controller.js'

const router = express.Router();
router.get("/",getcource)
router.post("/create-course",createcourse)
export default router