import mongoose from "mongoose";

const user = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname :{
        type : String,
        required : true

    },
    email :{
        type : String , 
        required :true ,
        union : true 
    },
    password:{
        type : String , 
        required :true 
    }
}) 

const User = mongoose.model('user',user
);
export default User