import express from "express";
import getShopDress from "../controller/ShopController.js";

const router=express.Router();

router.get('/',getShopDress);

export default router;