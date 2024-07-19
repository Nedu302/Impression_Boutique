import express from "express";

import ContactUs from "../controller/ContactUs.js";

const Contactrouter=express.Router();

Contactrouter.post("/Contact_us",ContactUs);

export default Contactrouter;