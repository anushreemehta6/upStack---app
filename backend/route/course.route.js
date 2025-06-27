import express from 'express'
import { buyCourse, coursedetail, createcourse, deletecourse, getcource ,updatecourse } from '../controller/course.controller.js'
import userMiddleware from '../middleware/user.mid.js';

const router = express.Router();
router.get("/",getcource)
router.post("/create-course",createcourse)
router.put("/update/:courseId", updatecourse)
router.delete("/delete/:courseId", deletecourse)
router.get("/course/:coursId",coursedetail)
router.post('/buy/:courseId',userMiddleware,buyCourse)

export default router