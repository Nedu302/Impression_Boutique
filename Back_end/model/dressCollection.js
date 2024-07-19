import mongoose from "mongoose";

const dressSchema=mongoose.Schema({
    id:Number,
    imgUrl:String,
    productName:String,
    price:Number,
    category:String
})

const Dress=mongoose.model("Dress",dressSchema);

export default Dress;