import mongoose from "mongoose";

const admin = mongoose.Schema({
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

const Admin = mongoose.model('admin',admin
);
export default Admin