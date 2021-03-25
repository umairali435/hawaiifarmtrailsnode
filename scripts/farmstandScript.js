const mongoose=require('mongoose');
const FarmStand=require('../models/farmstand');
const CommunitySupportedAgriculture=require('../models/csa');
const Farmandranches=require('../models/farmandranches');
const FarmerMarkets=require('../models/farmermarkets');
const Events=require('../models/events');
module.exports={
    famstandAddproduct: async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product name",
            });
        }
        if(req.body.price==undefined||req.body.price==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your price",
            });
        }
        if(req.body.type==undefined||req.body.type==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your type",
            });
        }
        if(req.body.shipingPrice==undefined||req.body.shipingPrice==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Shiping price",
            });
        }
        if(req.body.discount==undefined||req.body.discount==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your discount",
            });
        }
        if(req.files&&req.files.image){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your price",
            });
        }
        let farmStand = FarmStand();
        farmStand._id=mongoose.Types.ObjectId(),
        farmStand.name=req.body.name;
        farmStand.price=req.body.price;
        farmStand.type=req.body.type;
        farmStand.discount=req.body.discount;
        farmStand.shipingPrice=req.body.shipingPrice;
        farmStand.image=req.file.path;
        farmStand.save(async function (err, product) {
         if(err){
             console.log(err);
         }else{
             res.status(200).json({
                 "Success":true,
                "message":"product Posted Successfully"
             })
         }
        });
    },
    getAllProducts : async function(req,res){
        try {
            let products=await FarmStand.find();
            return res.status(200).json({
                "Success":true,
                "products":products,
            });
        } catch (error) {
            
        }
    },
    CsaProduct : async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product name",
            });
        }
        if(req.body.price==undefined||req.body.price==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product Price",
            });
        }
        if(req.body.details==undefined||req.body.details==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product details",
            });
        }
        if(req.body.timeFrom==undefined||req.body.timeFrom==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your TimeFrom",
            });
        }
        if(req.body.timeTo==undefined||req.body.timeTo==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product TimeTo",
            });
        }
        if(req.body.contact==undefined||req.body.contact==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Contact",
            });
        }
        if(req.body.lat==undefined||req.body.lat==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your latitude",
            });
        }
        if(req.body.lng==undefined||req.body.lng==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your longitude",
            });
        }
        
        if(req.body.features==undefined||req.body.features==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your features",
            });
        }
        let communitySuppertedAgriculture=CommunitySupportedAgriculture();
        communitySuppertedAgriculture._id=mongoose.Types.ObjectId();
        communitySuppertedAgriculture.name=req.body.name;
        communitySuppertedAgriculture.price=req.body.price;
        communitySuppertedAgriculture.details=req.body.details;
        communitySuppertedAgriculture.timeFrom=req.body.timeFrom;
        communitySuppertedAgriculture.timeTo=req.body.timeTo;
        communitySuppertedAgriculture.contact=req.body.contact;
        communitySuppertedAgriculture.type=req.body.type;
        communitySuppertedAgriculture.lat=req.body.lat;
        communitySuppertedAgriculture.lng=req.body.lng;
        communitySuppertedAgriculture.website=req.body.website;
        communitySuppertedAgriculture.image=req.file.path;
        communitySuppertedAgriculture.features=req.body.features;
        communitySuppertedAgriculture.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.redirect('findaCSA')
                
                
                
            }
           });
    },
    getAllCsaProducts : async function(req,res){
        try {
            let products=await CommunitySupportedAgriculture.find();
            return res.status(200).json({
                "Success":true,
                "CommunitySupportedAgriculture":products,
            });
        } catch (error) {
            
        }
    },
    addFarmAndRanches:async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product name",
            });
        }
        if(req.body.price==undefined||req.body.price==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product Price",
            });
        }
        if(req.body.details==undefined||req.body.details==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product details",
            });
        }
        if(req.body.timeFrom==undefined||req.body.timeFrom==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your TimeFrom",
            });
        }
        if(req.body.timeTo==undefined||req.body.timeTo==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product TimeTo",
            });
        }
        if(req.body.contact==undefined||req.body.contact==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Contact",
            });
        }
        if(req.body.lat==undefined||req.body.lat==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your latitude",
            });
        }
        if(req.body.lng==undefined||req.body.lng==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your longitude",
            });
        }
        
        // if(req.body.features==undefined||req.body.features==null){
        //     return res.status(200).json({
        //         "Success":false,
        //         "message":"please enter your features",
        //     });
        // }
        if(req.body.reservation==undefined||req.body.reservation==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter reservation",
            });
        }
        
        let farmandranches=Farmandranches();
        farmandranches._id=mongoose.Types.ObjectId();
        farmandranches.name=req.body.name;
        farmandranches.price=req.body.price;
        farmandranches.details=req.body.details;
        farmandranches.timeFrom=req.body.timeFrom;
        farmandranches.timeTo=req.body.timeTo;
        farmandranches.contact=req.body.contact;
        farmandranches.lat=req.body.lat;
        farmandranches.lng=req.body.lng;
        farmandranches.website=req.body.website;
        farmandranches.image=req.file.path;
        farmandranches.features=req.body.features;
        farmandranches.reservation=req.body.reservation;
        farmandranches.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.redirect('Farms&Ranches');
            }
           });
    },
    getFarmAndRanches : async function(req,res){
        try {
            let products=await Farmandranches.find();
            return res.status(200).json({
                "Success":true,
                "FarmAndRanches":products,
            });
        } catch (error) {
            
        }
    },
    AddFarmerMarkets : async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product name",
            });
        }
        if(req.body.price==undefined||req.body.price==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product Price",
            });
        }
        if(req.body.details==undefined||req.body.details==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product details",
            });
        }
        if(req.body.timeFrom==undefined||req.body.timeFrom==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your TimeFrom",
            });
        }
        if(req.body.timeTo==undefined||req.body.timeTo==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product TimeTo",
            });
        }
        if(req.body.contact==undefined||req.body.contact==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Contact",
            });
        }
        if(req.body.lat==undefined||req.body.lat==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your latitude",
            });
        }
        if(req.body.lng==undefined||req.body.lng==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your longitude",
            });
        }
        
        if(req.body.features==undefined||req.body.features==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your features",
            });
        }
        
        let farmerMarkets=FarmerMarkets();
        farmerMarkets._id=mongoose.Types.ObjectId();
        farmerMarkets.name=req.body.name;
        farmerMarkets.price=req.body.price;
        farmerMarkets.details=req.body.details;
        farmerMarkets.timeFrom=req.body.timeFrom;
        farmerMarkets.timeTo=req.body.timeTo;
        farmerMarkets.contact=req.body.contact;
        farmerMarkets.lat=req.body.lat;
        farmerMarkets.lng=req.body.lng;
        farmerMarkets.website=req.body.website;
        farmerMarkets.image=req.file.path;
        farmerMarkets.features=req.body.features;
        farmerMarkets.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                   res.redirect('FarmerMarkets')
                //    res.redirect('findaCSA')

            }
           });
    },
    getFarmerMarkets : async function(req,res){
        try {
            let products=await FarmerMarkets.find();
            return res.status(200).json({
                "Success":true,
                "FarmerMarkets":products,
            });
        } catch (error) {
            
        }
    },
    
    AddEvents : async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event name",
            });
        }
        if(req.body.details==undefined||req.body.details==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event details",
            });
        }
        if(req.body.timeFrom==undefined||req.body.timeFrom==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your TimeFrom",
            });
        }
        if(req.body.timeTo==undefined||req.body.timeTo==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your TimeTo",
            });
        }
        if(req.body.contact==undefined||req.body.contact==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Contact",
            });
        }
        if(req.body.lat==undefined||req.body.lat==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your latitude",
            });
        }
        if(req.body.lng==undefined||req.body.lng==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your longitude",
            });
        }
        
        if(req.body.month==undefined||req.body.month==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event month",
            });
        }
        
        let events=Events();
        events._id=mongoose.Types.ObjectId();
        events.name=req.body.name;
        events.details=req.body.details;
        events.timeFrom=req.body.timeFrom;
        events.timeTo=req.body.timeTo;
        events.contact=req.body.contact;
        events.lat=req.body.lat;
        events.lng=req.body.lng;
        events.website=req.body.website;
        events.image=req.file.path;
        events.month=req.body.month;
        events.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.status(200).json({
                   "Success":true,
                   "message":"Event Added Successfully",
                
                });
            }
           });
    },
    getEvents : async function(req,res){
        try {
            let events=await Events.find({});
            return res.status(200).json({
                "Success":true,
                "Events":events,
            });
        } catch (error) {
            
        }
    },
}