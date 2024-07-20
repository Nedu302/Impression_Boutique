import express from "express";
import  getDress  from '../controller/DressController.js';

const router=express.Router();
router.get("/",getDress);

export default router;
