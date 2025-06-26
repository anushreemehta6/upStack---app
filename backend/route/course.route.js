import express from 'express'
import { createcourse, getcource ,updatecourse } from '../controller/course.controller.js'

const router = express.Router();
router.get("/",getcource)
router.post("/create-course",createcourse)
router.put("/update/:courseId", updatecourse)
export default router