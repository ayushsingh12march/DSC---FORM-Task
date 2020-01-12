const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    studentName:{
        type : String,
        required : true,
    },
    regNo:{
        type:Number,
        required:true,
        unique:true,
    
    },
    choiceOfElective:{
        type:String,
        required:true,
    }},{
        timestamps:true
    
});

const FormData = mongoose.model('FormData',userSchema)
module.exports = FormData

