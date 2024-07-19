import Contact from "../model/ContactUs.js";

export  const sendMessage=async (req,res)=>{
    try {
        const {name,email,message}=req.body;

        const createUser=new Contact({
            name:name,
            email:email,
            message:message

        });

        await createUser.save();
        res.status(201).json({message:"Message send successfully!"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error."})
    }
}

export default sendMessage;