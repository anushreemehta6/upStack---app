import mongoose from 'mongoose'

const formschema = mongoose.Schema({
 email : {
    type : String, 
    required : true
 },
 subject : {
    type :String 
    
 }, 
 message :{
    type : String, 
    required : true
 }
})

const Form = mongoose.model("form", formschema);
export default Form 