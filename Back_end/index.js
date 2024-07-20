import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import dressRoute from './route/dressRoute.js';
import ShopDressRouter from './route/ShopDress.js';
import router from "./route/UserRoute.js";
import Contactrouter from "./route/Contact_us.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000 || 3001;
const URI = "mongodb+srv://naveedahmad6028:xw4lyjllo3hhGHGr@cluster0.rp3ffvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Log the MongoDB connection string for debugging
console.log("MongoDB Connection String:", URI);

// Connect to MongoDB using Mongoose
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds
})
.then(() => console.log("Connected to MongoDB"))
.catch(error => {
    console.error("Error connecting to MongoDB:", error.message);
});

// Define routes
app.use("/", dressRoute);
app.use("/components/ShopProd", ShopDressRouter);
app.use("/components/", router);
app.use("/components/", Contactrouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
