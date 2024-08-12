import mongoose from 'mongoose';

const principleschema=new mongoose.Schema({

email:{

    type:String,
    required:true,
    unique:true
},

password:{

    type:String,
    required:true,
    unique:true
}




},{timestamps:true})


export const Principles=mongoose.model("Principles",principleschema);