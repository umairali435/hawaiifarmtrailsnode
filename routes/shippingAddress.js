const express=require('express');
const router=express.Router();
router.post('/AddShippingAddress',upload.single('image'),(req,res)=>{
    Product.addFarmAndRanches(req,res);
    });
router.get('/getAllShippingAddress',(req,res)=>{
        Product.getAllProducts(req,res);
});
module.exports=router;