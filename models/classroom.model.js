import mongoose from 'mongoose'

export const classroomSchema=new mongoose.Schema({

    name:{

        type:String,
        required:true,
        unique:true
    },

    teacher:{

        type:String,
        required:true,
        unique:true
    },

    teacheremail:{

        type:String,
        required:true,
        unique:true
    },
    
    students :{

       type:[{
          
           Name:String,
           email:String,

        }]
    },

   


},{timestamps:true})

export const Classrooms=mongoose.model('Classrooms',classroomSchema);