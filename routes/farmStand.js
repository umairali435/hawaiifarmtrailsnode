const express=require('express');
const router=express.Router();
let passport = require('passport');
const Product=require('../scripts/farmstandScript');
// const csa=require('../scripts/farmstandScript');
const GetFarmAndRanches=require('../scripts/admin/admingetdatas');
const User=require('../scripts/userScript');
const AdminUser=require('../scripts/admin/adminlogin');
const multer=require('multer');
const { getShipingAddress, getBusniessSupport } = require('../scripts/farmstandScript');
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
// router.get('/getFarmerMarkets',(req,res)=>{
//     Product.getFarmerMarkets(req,res);
// });
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
router.post('/getFavouritesFarmerMarkets',(req,res)=>{
    Product.getFavProductsForFarmerMarkets(req,res);
});
// ------------------formstand-------------
router.get('/formstand',(req,res)=>{
    GetFarmAndRanches.getFarmstand(req,res);
});
router.post('/formstand'),upload.single('image'),(req,res)=>{
    Product.famstandAddproduct(req,res);
}
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
router.get('/getFarmAndRanches/:userId/:type',(req,res)=>{
    Product.getFarmAndRanchesbyTypes(req,res);
});
router.get('/getFarmerMarkets/:userId',(req,res)=>{
    Product.getFarmerMarkets(req,res);
});
router.get('/getevents',(req,res)=>{
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
//    ------------------- for option----
router.get('/option',(req,res)=>{
    GetFarmAndRanches.optionGet(req,res);
    });
router.post('/option',(req,res)=>{
    Product.mainoption(req,res);
}); 
router.get('/getoption',(req,res)=>{
    Product.getoption(req,res);
   });
//    -----------------------for island----------
router.get('/island',(req,res)=>{
    GetFarmAndRanches.islandGet(req,res);
    });
router.post('/island',(req,res)=>{
    Product.mainisland(req,res);
}); 
router.get('/getisland',(req,res)=>{
    Product.getisland(req,res);
   });
router.get('/getfromtypes/:userId/:type',(req,res)=>{
    Product.getFarmAndRanchesbyTypes(req,res);
   });
router.get('/getfromoptions/:userId/:options',(req,res)=>{
    Product.getFarmAndRanchesbyOptions(req,res);
   });
router.get('/getfromislands/:userId/:islands',(req,res)=>{
    Product.getFarmAndRanchesbyIslands(req,res);
   });
//    --------------------------------
router.get('/shipingaddress',(req,res)=>{
    GetFarmAndRanches.shippingAddressGet(req,res);
});
router.post('/shipingaddress',(req,res)=>{
    Product.AddShipingAddress(req,res);
});
// ------------------------------
router.get('/busniesssupport',(req,res)=>{
    GetFarmAndRanches.busniesssupportGet(req,res);
});
router.post('/busniesssuport',(req,res)=>{
    Product.addBusniessSuport(req,res);
});
router.get('/getBusniessSuport',(req,res)=>{
    Product.getBusniessSupport(req,res);
});
// ---------------------------------
router.get('/category',(req,res)=>{
    GetFarmAndRanches.categoriesGet(req,res);
});
router.post('/category',(req,res)=>{
    Product.getcategory(req,res);
});
router.get('/getcategory',(req,res)=>{
    Product.getcategory(req,res);
});
module.exports=router;