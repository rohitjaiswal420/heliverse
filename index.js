import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { principlerouter } from './routers/principle.routers.js'
import { teacherrouter } from './routers/teacher.router.js'
import { studentrouter } from './routers/student.router.js'
import { classroomrouter } from './routers/classroom.router.js'
const app=express();

dotenv.config();

// connection to backend

(
   async function connection()
   {
       try {

        await mongoose.connect(`${process.env.MONGODB}`);

        app.on('error',(error)=>{

            console.log("error in express",error);
        })

        app.listen(process.env.PORT,()=>{
    
            console.log(`mongodb connected at ${process.env.PORT}`);
    
        })
        
       } catch (error) {
        
          console.log(error);
       }

})()

// middlewares 

app.use(express.json());
app.use(cors());
app.use('/app',principlerouter);
app.use('/app',teacherrouter);
app.use('/app',studentrouter);
app.use('/app',classroomrouter);
