import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import config from './config.js';
import cors from 'cors'
import courseRouter from '../backend/route/course.route.js'
import fileUpload from 'express-fileupload'
import { v2 as cloudinary } from 'cloudinary';
import formRouter from '../backend/route/form.route.js'
import userRouter from '../backend/route/user.route.js'
import adminRouter from '../backend/route/admin.route.js'
const app = express()
dotenv.config()
const port = process.env.PORT ||3000
const uri = process.env.MONGODBURI 

// connect to mongoDb 
try {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongodb")
    
} catch (error) {
    console.log("ERROR: ", error)
}

  cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
    });
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use("/course",courseRouter)
app.use("/submit",formRouter)
app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
