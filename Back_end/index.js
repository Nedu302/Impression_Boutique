import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dressRoute from './route/dressRoute.js';
import ShopDressRouter from './route/ShopDress.js';
import cors from "cors";
import router from "./route/UserRoute.js";
import Contactrouter from "./route/Contact_us.js"
dotenv.config();

const app = express();
app.use(cors({
    origin: 'https://impression-boutique-b3cv.vercel.app',
    methods: 'GET,POST',
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURL;

mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log("Error: ", error));

app.use("/", (req,res)=>
    {
        res.json("Ellow");
    });
//app.use("/components/ShopProd", ShopDressRouter);
//app.use("/components/",router)
//app.use("/components/",Contactrouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
