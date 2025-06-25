import express from 'express'
import formdata from '../controller/form.controller.js'
const router = express.Router();

router.post("/contact",formdata)
export default router