import { Classrooms } from "../models/classroom.model.js";
import { Teachers } from "../models/teacher.models.js";
import { Students } from "../models/student.model.js";
export const createclassrooms = async(req,res)=>{

    const{name,data}=req.body
    
    try {
        
        const teacheremail=data.email;
        const email=data.email;
        const teacher=data.name;
        const students=[];
        const checkclassroom=await Classrooms.findOne({name});
        if(checkclassroom)
        {
            res.send("classroom already existed");
        }
        else
        { 
            const findteacher=await Teachers.findOne({email});
            await findteacher.updateOne({
                
               classname:name
            })
            const newclassroom=await new Classrooms({name,teacher,teacheremail,students});
            
            
            
            newclassroom.save();
            res.status(200).send("classroom created successfully");
        }
        
    } catch (error) {
        
        console.log(error)
    }

}

export const getclassroom=async(req,res)=>{

    try {
        
        const classroom=await Classrooms.find();
       
        res.status(200).send(classroom);

    } catch (error) {
        
        console.log(error);
    }

}

export const updateclassroom=async(req,res)=>{

    const {Name,name,email,classname}=req.body;
    const obj={Name,email};
    try {
        
        const classroom=await Classrooms.findOne({name});
        let array=classroom.students;
        array.push(obj);
        await classroom.updateOne({

            students:array

        })

        const student= await Students.findOne({

           email

        })

        await student.updateOne({

            classname:name

        })
        res.status(200);

    } catch (error) {
        
        console.log(error);
    }

}

export const deletestudent=async (req,res)=>{
  
    const{email,name}=req.body;
    
    try {

       
        const arr=[];
        const assignedclass=await Classrooms.findOne({name});
        assignedclass.students.map((item)=>item.email!==email && arr.push(item));
        await assignedclass.updateOne({

            students:arr
        })

        const student=await Students.findOne({email});
        await student.updateOne({
            
            classname:""
        })

       
        res.status(200);

        
    } catch (error) {
        
        console.log(error)
    }


}