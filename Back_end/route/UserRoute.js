import express from "express";
import { SignUp, LogIn}  from "../controller/User.js";


const router=express.Router();

router.post("/SignUp",SignUp);
router.post("/LogIn",LogIn);

export default router;