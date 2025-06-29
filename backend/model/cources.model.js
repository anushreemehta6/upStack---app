import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";

const courseschema = mongoose.Schema(
    {
        title: {
            type: String,
            requireed: true
        },
        image :{
          
          public_id:{
              type: String,
            required: true
          },
          url:{
              type: String,
            required: true
          }
        },
         price :{
            type: String,
            required: true
        },
         description :{
            type: String,
            required: true
        },
        creatorId : {
          type: mongoose.Types.ObjectId,
          ref:'User'
        }

    }
)

const Course = mongoose.model("course",courseschema)
export default Course