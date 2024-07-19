import mongoose, { model } from "mongoose";


const contactSchema=mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required: true,
    }
    
})

const Contact=mongoose.model("Contact_us",contactSchema);

export default Contact;
