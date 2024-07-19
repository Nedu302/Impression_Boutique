import mongoose from "mongoose";

const shopSchema=mongoose.Schema({
    id:Number,
    imgUrl:String,
    productName:String,
    price:Number,
    category:String
});

const shopDress=mongoose.model("ShopDress",shopSchema);

export default shopDress;



