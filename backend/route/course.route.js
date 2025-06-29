import express from 'express'
import { buyCourse, coursedetail, createcourse, deletecourse, getcource ,updatecourse } from '../controller/course.controller.js'
import userMiddleware from '../middleware/user.mid.js';
import adminMiddleware from '../middleware/admin.mid.js';

const router = express.Router();
router.get("/",getcource)
router.post("/create-course",adminMiddleware,createcourse)
router.put("/update/:courseId",adminMiddleware, updatecourse)
router.delete("/delete/:courseId",adminMiddleware, deletecourse)
router.get("/course/:coursId",coursedetail)
router.post('/buy/:courseId',userMiddleware,buyCourse)

export default router