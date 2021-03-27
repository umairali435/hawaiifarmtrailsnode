const express=require('express');
const router=express.Router();
let passport = require('passport');
const Product=require('../scripts/farmstandScript');
// const csa=require('../scripts/farmstandScript');
const GetFarmAndRanches=require('../scripts/admin/admingetdatas');
const User=require('../scripts/userScript');
const AdminUser=require('../scripts/admin/adminlogin');
const multer=require('multer');
// const Features = require('../models/features');
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
router.get('/eventstwo',(req,res)=>{
    res.render('events');
});
router.get('/Farms&Ranches',(req,res)=>{    
    GetFarmAndRanches.getFarmAndRanchesAdmin(req,res);

});
// -----------------------
router.get('/findaCSA',(req,res)=>{
   GetFarmAndRanches.getFindCSA(req,res)
});
router.post('/findaCSA',upload.single('image'),(req,res)=>{
    Product.CsaProduct(req,res);
});
// ---------------------------------------events---
// router.get('/events',(req,res)=>{
//     res.render('Events');
// });
router.get('/events',(req,res)=>{
    GetFarmAndRanches.getEvent(req,res)
});
router.post('/events',upload.single('image'),(req,res)=>{
Product.AddEvents(req,res);
});
// ----------------------------
router.post('/csa/addProduct',upload.single('image'),(req,res)=>{
Product.CsaProduct(req,res);
});
router.post('/Farms&Ranches',upload.single('image'),(req,res)=>{
Product.addFarmAndRanches(req,res);
});
// -------------------------------
router.get('/getFarmerMarkets',(req,res)=>{
    Product.getFarmerMarkets(req,res);
});
router.get('/FarmerMarkets',(req,res)=>{
    GetFarmAndRanches.getFarmersMarkets(req,res);
});
router.post('/FarmerMarkets',upload.single('image'),(req,res)=>{
Product.AddFarmerMarkets(req,res);
});
// --------------------------------
router.post('/AddEvent',upload.single('image'),(req,res)=>{
Product.AddEvents(req,res);
});
router.post('/AddtoFavourites',(req,res)=>{
    Product.addFavourite(req,res);
});
router.post('/getFavourites',(req,res)=>{
    Product.getFavProducts(req,res);
});
router.get('/farmStand/getAllProducts',(req,res)=>{
    Product.getAllProducts(req,res);
});
router.get('/csa/getProducts',(req,res)=>{
    Product.getAllCsaProducts(req,res);
    });

router.get('/getFarmAndRanches/:userId',(req,res)=>{
    Product.getFarmAndRanches(req,res);
});
router.get('/getFarmAndRanches/:userId/:lat/:lng',(req,res)=>{
    Product.getFarmAndRanchesbylatandlng(req,res);
});

router.get('/getFarmerMarkets',(req,res)=>{
    Product.getFarmerMarkets(req,res);
});
router.get('/events',(req,res)=>{
    Product.getEvents(req,res);
});
// ----------------for Types-----------------
router.get('/types',(req,res)=>{
    GetFarmAndRanches.typesGet(req,res);
});
router.post('/types',(req,res)=>{
    Product.types(req,res);
});
router.get('/gettypes',(req,res)=>{
 Product.gettypes(req,res);
});
// -----------------for features------
router.get('/features',(req,res)=>{
    GetFarmAndRanches.featuresGat(req,res);
    });
router.post('/features',(req,res)=>{
    Product.mainfeatures(req,res);
}); 
router.get('/getfeatures',(req,res)=>{
    Product.getfeatures(req,res);
   });
module.exports=router;