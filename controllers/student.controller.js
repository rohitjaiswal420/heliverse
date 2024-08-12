import { Students } from "../models/student.model.js";
import{ Classrooms} from "../models/classroom.model.js"
export const createstudent=async(req,res)=>{


   const{name,email,classname}=req.body;
   try {
    

    const checkstudent=await Students.findOne({email});
    if(checkstudent===null)
    {
        const newstudent=await new Students({

            name,
            email,
            classname,
            
       
       
           })
             
           newstudent.save();
           res.status(200).send("Student created successfully")
    }
    else
    {
          res.send("This Student already created")
    }
    


   } catch (error) {

    console.log(error)
    
   }

}

export const getstudent=async(req,res)=>{

    try {
        
        const students=await Students.find();
        res.status(200).send(students);

    } catch (error) {
        
        console.log(error);
    }

}

export const studentvalidation = async(req,res)=>{
  
    const data=req.body;
    const email=data.email;
    const name=data.name;

    try {

    
    const student=await Students.findOne({email});
    
    if(student && email===student.email && name===student.name)
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

export const studentclass=async (req,res)=>{

    const{email}=req.body;
    
    try {

    const student=await Students.findOne({email});
    if(student.classname==="")
    {
         res.status(201).send({messege:"Not Assigned in any Class"});
    }
    else
    {
        const name=student.classname;
        const newclass=await Classrooms.findOne({name});
        res.status(200).send(newclass);
    }
        
    } catch (error) {
        
        console.log(error)
    }
}

export const deletestudent=async (req,res)=>{
  
    const{email,name}=req.body;
    
    try {

       
        const arr=[];
        await Students.deleteOne({email});
        const assignedclass=await Classrooms.findOne({name});
        assignedclass.students.map((item)=>item.email!==email && arr.push(item));
        await assignedclass.updateOne({

            students:arr
        })

        res.status(200);

        
    } catch (error) {
        
        console.log(error)
    }


}