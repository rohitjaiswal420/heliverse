import mongoose from 'mongoose'

export const studentSchema=new mongoose.Schema({


  name:
      { 
        
        type:String,
        required:true,

      },

  classname:{

    type:String,
    
  },

  email:{
   
    type:String,
    required:true,
    unique:true
  },



},{timestamps:true})


export const Students=mongoose.model('Students',studentSchema);


