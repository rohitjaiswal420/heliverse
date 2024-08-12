import  {Principles}  from "../models/principle.model.js";


export const createprinciple = async(req,res)=>{

    const data=await req.body;
    
    try {

        const email=data.email;
        const password=data.password;
       
        const newprinciple=new Principles({

            email,
            password
        })

        newprinciple.save();
        res.status(200).send("principle created succesfully");

        
    } catch (error) {
        
        res.status(404).send("error occured");
        console.log(error);
    }
}

export const principlevalidation = async(req,res)=>{
  
    const data=req.body;
    const email=data.email;
    const password=data.password;

    try {

    
    const principle=await Principles.findOne({email});
    
    if(principle && email===principle.email && password===principle.password)
    {
         res.status(200).send(true);
    }
    else{

        res.send(false);
    }

     console.log(principle.email,principle.password)
    
    
 } catch (error) {
    
    console.log(error)
 }


}