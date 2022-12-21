const productController=require('../controllers/product');
const express= require('express');
const router=express.Router();


router.post("/add",productController.add);
router.get("/getAllProduct",productController.getAllProduct);
router.get("/getProduct",productController.Product);



module.exports=router;
