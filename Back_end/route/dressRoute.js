import express from "express";
import  getDress  from '../controller/DressController.js';

const router=express.Router();
router.get("https://impression-boutique.vercel.app/?categories=ambroidery,chiffon,rafiaData",getDress);

export default router;
