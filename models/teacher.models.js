import mongoose from 'mongoose'

export const teacherSchema=new mongoose.Schema({

      name:
      { 
        
        type:String,
        required:true,
        

      },
      email:{
       
        type:String,
        required:true,
        unique:true
        
      },
      classname:{
        type:String
      }

     

    


},{timestamps:true})

export const Teachers=mongoose.model('Teachers',teacherSchema);