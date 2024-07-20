import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dressRoute from './route/dressRoute.js';
import ShopDressRouter from './route/ShopDress.js';
import cors from "cors";
import router from "./route/UserRoute.js";
import Contactrouter from "./route/Contact_us.js"
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURL;

const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.log("Error: ", error));

app.use("/", dressRoute);
app.use("/components/ShopProd", ShopDressRouter);
app.use("/components/", router);
app.use("/components/", Contactrouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
