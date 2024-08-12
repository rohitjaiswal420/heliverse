import { Teachers } from "../models/teacher.models.js";
import { Classrooms } from "../models/classroom.model.js";
export const createteacher=async(req,res)=>{


   const{name,email,classname}=req.body;
   try {
    
    console.log(name,email,classname)
    const checkteacher=await Teachers.findOne({email});
    
    if(checkteacher===null)
    {
         const newteacher= new Teachers({

            name,
            email,
            classname
          
           })
            
        
            await newteacher.save();
            res.status(200).send("Teacher created successfully")
           
        
    }
    else{

        res.status(200).send("Teacher existed already")
    }
    


   } catch (error) {
    
    console.log(error)
    res.status(404).send("error")
    
   }

}

export const getteacher=async(req,res)=>{

    try {
        
        const teachers=await Teachers.find();
        res.status(200).send(teachers);

    } catch (error) {
        
        console.log(error);
    }

}

export const teachervalidation = async(req,res)=>{
  
    const data=req.body;
    const email=data.email;
    const name=data.name;

    try {

    console.log(email);
    const teacher=await Teachers.findOne({email});
    
    if(teacher && email===teacher.email && name===teacher.name)
    {
         res.status(200).send(true);
    }
    else{

        res.send(false);
    }

    
    
    
 } catch (error) {
    
    console.log(error)
 }


}

export const teacherclass=async (req,res)=>{

    const{email}=req.body;
    
    try {

    const teacher=await Teachers.findOne({email});
    if(teacher.classname==="")
    {
         res.status(201).send({messege:"Not Assigned in any Class"});
    }
    else
    {
        const name=teacher.classname;
        const newclass=await Classrooms.findOne({name});
        res.status(200).send(newclass);
    }
        
    } catch (error) {
        
        console.log(error)
    }
}

export const deleteteacher=async (req,res)=>{
  
    const{email,name}=req.body;
    
    try {

       
      
        await Teachers.deleteOne({email});
        const assignedclass=await Classrooms.findOne({name});
        await assignedclass.updateOne({
             
           teacher:"",
           teacheremail:""

        })

        res.status(200);

        
    } catch (error) {
        
        console.log(error)
    }


}