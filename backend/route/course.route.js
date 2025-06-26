import express from 'express'
import { coursedetail, createcourse, deletecourse, getcource ,updatecourse } from '../controller/course.controller.js'

const router = express.Router();
router.get("/",getcource)
router.post("/create-course",createcourse)
router.put("/update/:courseId", updatecourse)
router.delete("/delete/:courseId", deletecourse)
router.get("/course/:coursId",coursedetail)
export default router