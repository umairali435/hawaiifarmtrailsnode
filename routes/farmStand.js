const express=require('express');
const router=express.Router();
const Product=require('../scripts/farmstandScript');
const User=require('../scripts/userScript');
const AdminUser=require('../models/adminuser');
const multer=require('multer');
const storage=multer.diskStorage({
    destination:'uploads/',
    filename:function(req,file,cb){
        cb(null,`${file.fieldname+file.originalname}_${Date.now()}${file.originalname}`);
    }
});
const fileFilter=(req,file,cb)=>{
if(file.mimetype==="image/jpeg"||file.mimetype==="image/png"){
    cb(null,true);
}else{
    cb("file must be jpeg or png",false);
}
};
const upload =multer({storage:storage,limits:{
    fileSize:1024*1024*5,
}, fileFilter:fileFilter});
router.get('/Admin',(req,res)=>{
    res.render('demo');
});
router.post('/Admin',(req,res)=>{
    AdminUser.loginAdmin(req,res);
}); 
router.get('/getevents',(req,res)=>{
    res.render('events');
});
router.get('/Farms&Ranches',(req,res)=>{
    res.render('Farms&Ranches');
});
router.post('/events',(req,res)=>{
    res.render('events');
});
router.post('/getevents',upload.single('image'),(req,res)=>{
Product.famstandAddproduct(req,res);
});
router.post('/csa/addProduct',upload.single('image'),(req,res)=>{
Product.CsaProduct(req,res);
});
router.post('/AddFarmandRanches',upload.single('image'),(req,res)=>{
Product.addFarmAndRanches(req,res);
});
router.post('/AddFarmerMarket',upload.single('image'),(req,res)=>{
Product.AddFarmerMarkets(req,res);
});
router.post('/AddEvent',upload.single('image'),(req,res)=>{
Product.AddEvents(req,res);
});
router.get('/farmStand/getAllProducts',(req,res)=>{
    Product.getAllProducts(req,res);
});
router.get('/csa/getProducts',(req,res)=>{
    Product.getAllCsaProducts(req,res);
    });
router.get('/getFarmAndRanches',(req,res)=>{
    Product.getFarmAndRanches(req,res);
});
router.get('/getFarmerMarkets',(req,res)=>{
    Product.getFarmerMarkets(req,res);
});
router.get('/events',(req,res)=>{
    Product.getEvents(req,res);
});
module.exports=router;