const mongoose=require('mongoose');
const FarmStand=require('../models/farmstand');
const CommunitySupportedAgriculture=require('../models/csa');
const Farmandranches=require('../models/farmandranches');
const FarmerMarkets=require('../models/farmermarkets');
const Events=require('../models/events');
const GetTypes=require('../models/types');
const Favourite=require('../models/favourite');
const Features=require('../models/features');
const Option=require('../models/option');
const Island=require('../models/island');
const ShippingAddress=require('../models/shippingAddress');
const BusniessSuport=require('../models/busniesssupport');
const Category=require('../models/categories');
const categories = require('../models/categories');

module.exports={
    // ---------------------formstand-
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
        farmandranches.nearlat=Math.floor(req.body.lat);
        farmandranches.nearlng=Math.floor(req.body.lng);
        farmandranches.website=req.body.website;
        farmandranches.image=req.file.path;
        farmandranches.types=req.body.types;
        farmandranches.options=req.body.options;
        farmandranches.islands=req.body.islands;
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
            let allProducts = [];
            let products=await Farmandranches.find();
            if(products != null && products !=""){
                for (const product of products) {
                    let isfavourite = false;
                    let mainObject = {}
                    let favourite = await Favourite.findOne({user : req.params.userId,farmandranches : product._id});
                    if(favourite != null && favourite !=""){
                        isfavourite = true;
                    }
                    mainObject.isfavourite = isfavourite;
                    mainObject.product = product;
                    await allProducts.push(mainObject);

                }
            }
            return res.status(200).json({
                "Success":true,
                "FarmAndRanches":allProducts,
            });
        } catch (error) {
            
        }
    },
    getFarmAndRanchesbylatandlng : async function(req,res){
        console.log(req.params.lat);
        console.log(req.params.lng);
        try {
            if(req.params.lat!=null||req.params.lng!=null&&req.params.lat!=undefined||req.params.lng!=undefined){
                let allProducts = [];
            let products=await Farmandranches.find({
                $or:[
                    {
                        nearlat:Math.floor(req.params.lat),
                        nearlng:Math.floor(req.params.lng),
                    }
                ]
            });
            if(products != null && products !=""){
                for (const product of products) {
                    let isfavourite = false;
                    let mainObject = {}
                    let favourite = await Favourite.findOne({user : req.params.userId,product : product._id});
                    if(favourite != null && favourite !=""){
                        isfavourite = true;
                    }
                    mainObject.isfavourite = isfavourite;
                    mainObject.product = product;
                    await allProducts.push(mainObject);

                }
            }
            return res.status(200).json({
                "Success":true,
                "FarmAndRanches":allProducts,
            });
            }
        } catch (error) {
            
        }
    },
    getFarmAndRanchesbyTypes : async function(req,res){
        console.log(req.params.type);
        if(req.params.type==null||req.params.type==undefined){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your types name",
            });

        }
        let allProducts = [];
        let products=await Farmandranches.find({
                    types:req.params.type,
        });
        if(products != null && products !=""){
            for (const product of products) {
                let isfavourite = false;
                let mainObject = {}
                let favourite = await Favourite.findOne({user : req.params.userId,product : product._id});
                if(favourite != null && favourite !=""){
                    isfavourite = true;
                }
                mainObject.isfavourite = isfavourite;
                mainObject.product = product;
                await allProducts.push(mainObject);

            }
        }
        return res.status(200).json({
            "Success":true,
            "FarmAndRanches":allProducts,
        });
    },
    getFarmAndRanchesbyOptions : async function(req,res){
        console.log(req.params.options);
        if(req.params.options==null||req.params.options==undefined){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your options name",
            });

        }let allProducts = [];
        let products=await Farmandranches.find({
        options:req.params.options,
        });
        if(products != null && products !=""){
            for (const product of products) {
                let isfavourite = false;
                let mainObject = {}
                let favourite = await Favourite.findOne({user : req.params.userId,product : product._id});
                if(favourite != null && favourite !=""){
                    isfavourite = true;
                }
                mainObject.isfavourite = isfavourite;
                mainObject.product = product;
                await allProducts.push(mainObject);

            }
        }
        return res.status(200).json({
            "Success":true,
            "FarmAndRanches":allProducts,
        });
    },
    getFarmAndRanchesbyIslands : async function(req,res){
        console.log(req.params.islands);
        if(req.params.islands==null||req.params.islands==undefined){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your islands name",
            });

        }let allProducts = [];
        let products=await Farmandranches.find({
                    islands:req.params.islands,
        });
        if(products != null && products !=""){
            for (const product of products) {
                let isfavourite = false;
                let mainObject = {}
                let favourite = await Favourite.findOne({user : req.params.userId,product : product._id});
                if(favourite != null && favourite !=""){
                    isfavourite = true;
                }
                mainObject.isfavourite = isfavourite;
                mainObject.product = product;
                await allProducts.push(mainObject);

            }
        }
        return res.status(200).json({
            "Success":true,
            "FarmAndRanches":allProducts,
        });
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
        farmerMarkets.type=req.body.type;
        farmerMarkets.island=req.body.island;
        farmerMarkets.option=req.body.option;
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
            let allProducts = [];
            let products=await FarmerMarkets.find();
            if(products != null && products !=""){
                for (const product of products) {
                    let isfavourite = false;
                    let mainObject = {}
                    let favourite = await Favourite.findOne({user : req.params.userId,farmermarkets : product._id});
                    if(favourite != null && favourite !=""){
                        isfavourite = true;
                    }
                    mainObject.isfavourite = isfavourite;
                    mainObject.product = product;
                    await allProducts.push(mainObject);

                }
            }
            return res.status(200).json({
                "Success":true,
                "FarmerMarkets":allProducts,
            });
        } catch (error) {
            
        }
    },
    // ----------------------------event-------------
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
        if(req.body.discount==undefined||req.body.discount==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your discount",
            });
        }
        
        if(req.body.months==undefined||req.body.months==null){
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
        events.discount=req.body.discount;
        events.months=req.body.months;
        events.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.redirect('Events')

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
    // ----------------------shippingAddress--------
    AddShipingAddress : async function(req,res){
        if(req.body.houseno==undefined||req.body.houseno==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your houseno",
            });
        }
        if(req.body.city==undefined||req.body.city==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your city",
            });
        }
        if(req.body.country==undefined||req.body.country==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your country",
            });
        }
        if(req.body.note==undefined||req.body.note==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your note",
            });
        }
        
        
        let shippingAddress=ShippingAddress();
        shippingAddress._id=mongoose.Types.ObjectId();
        shippingAddress.houseno=req.body.houseno;
        shippingAddress.city=req.body.city;
        shippingAddress.country=req.body.country;
        shippingAddress.note=req.body.note;
        shippingAddress.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.redirect('ShipingAddress')

            }
           });
    },
    getShipingAddress : async function(req,res){
        try {
            let events=await Events.find({});
            return res.status(200).json({
                "Success":true,
                "ShipingAddress":shippingAddress,
            });
        } catch (error) {
            
        }
    },
    // -------------------categories-----------------
    maincategory: async function(req,res){
        console.log(req.body);
        if(req.body.typess==undefined||req.body.typess==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your  Categry",
            });
        }
        let gettype=Category();
        gettype._id=mongoose.Types.ObjectId();
        gettype.typess=req.body.typess;
        gettype.save(async function(err,typess){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('Categories');

            }
        });

    },
    getcategory : async function(req,res){
        try {
            let category=await Category.find();
            return res.status(200).json({
                "Success":true,
                "Category":category,
            });
        } catch (error) {
            
        }
    },
    // ------------------------Island-------
    mainisland: async function(req,res){
        console.log(req.body);
        if(req.body.typess==undefined||req.body.typess==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Island name",
            });
        }
        let gettype=Island();
        gettype._id=mongoose.Types.ObjectId();
        gettype.typess=req.body.typess;
        gettype.save(async function(err,typess){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('Island');

            }
        });

    },
    getisland : async function(req,res){
        try {
            let island=await Island.find();
            return res.status(200).json({
                "Success":true,
                "Island":island,
            });
        } catch (error) {
            
        }
    },
    // ------------------option-----------
    mainoption: async function(req,res){
        console.log(req.body);
        if(req.body.typess==undefined||req.body.typess==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event name",
            });
        }
        let gettype=Option();
        gettype._id=mongoose.Types.ObjectId();
        gettype.typess=req.body.typess;
        gettype.save(async function(err,typess){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('Option');

            }
        });

    },
    getoption : async function(req,res){
        try {
            let option=await Option.find();
            return res.status(200).json({
                "Success":true,
                "Option":option,
            });
        } catch (error) {
            
        }
    },
    // --------------------------------features-----
    mainfeatures: async function(req,res){
        console.log(req.body);
        if(req.body.typess==undefined||req.body.typess==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event name",
            });
        }
        let gettype=Features();
        gettype._id=mongoose.Types.ObjectId();
        gettype.typess=req.body.typess;
        gettype.save(async function(err,typess){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('Features')

            }
        });

    },
    getfeatures : async function(req,res){
        try {
            let features=await Features.find();
            return res.status(200).json({
                "Success":true,
                "Features":features,
            });
        } catch (error) {
            
        }
    },
    // ------------------------------------types-----
    types: async function(req,res){
        console.log(req.body);
        if(req.body.typess==undefined||req.body.typess==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Event name",
            });
        }
        let gettype=GetTypes();
        gettype._id=mongoose.Types.ObjectId();
        gettype.typess=req.body.typess;
        gettype.save(async function(err,typess){
            if(err){
                console.log(err);
            }
            else{
                res.redirect('Types')

            }
        });

    },
    gettypes : async function(req,res){
        try {
            let typess=await GetTypes.find();
            return res.status(200).json({
                "Success":true,
                "Types":typess,
            });
        } catch (error) {
            
        }
    },
    // ---------------------------------------------------
    addFavourite:async function(req,res){
        console.log("adding to fav");
        if(req.body.postId==undefined||req.body.postId==null){
            return res.status(200).json({
                "Success":false,
                "message":"please provide postId",
            });
        }
        if(req.body.userId==undefined||req.body.userId==null){
            return res.status(200).json({
                "Success":false,
                "message":"please provide userId",
            });
        }
        if(req.body.type=="farmandranches"){
            let foundfav = await Favourite.findOne({farmandranches : req.body.postId, user : req.body.userId});
            if(foundfav != null && foundfav !=''){
                await foundfav.remove();
                return res.send({'Success' : true,'message' : 'Product removed from Favourites'})
            }else{
                let newFav =  Favourite();
                newFav.user = req.body.userId;
                newFav.farmandranches = req.body.postId;
                await newFav.save(async function (err, product){
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json({
                           "Success":true,
                           'product':product,
                           "message":" Added Successfully",
                        });
                    }
                });
            }
        }else{
            let foundfav = await Favourite.findOne({farmermarkets : req.body.postId, user : req.body.userId});
            if(foundfav != null && foundfav !=''){
                await foundfav.remove();
                return res.send({'Success' : true,'message' : 'Product removed from Favourites'})
            }else{
                let newFav =  Favourite();
                newFav.user = req.body.userId;
                newFav.farmermarkets = req.body.postId;
                await newFav.save(async function (err, product){
                    if(err){
                        console.log(err);
                    }else{
                        res.status(200).json({
                           "Success":true,
                           'product':product,
                           "message":" Added Successfully",
                        });
                    }
                });
            }
        }
    },
    getFavProducts:async function(req,res){
        try {
            if(req.body.userId == '' || req.body.userId == undefined){
                return res.send({'Success' : false,'message' : 'User id is required.'})
            }
            let products=await Favourite.find({user:req.body.userId}).populate('farmandranches');
            return res.send({'Success' : true,'products' : products});
        } catch (error) {
        }
    },
    getFavProductsForFarmerMarkets:async function(req,res){
        try {
            if(req.body.userId == '' || req.body.userId == undefined){
                return res.send({'Success' : false,'message' : 'User id is required.'})
            }
            let products=await Favourite.find({user:req.body.userId}).populate('farmandranches');
            return res.send({'Success' : true,'products' : products});
        } catch (error) {
        }
    },
    // -----------------------------bussniess support-----------
    addBusniessSuport:async function(req,res){
        if(req.body.name==undefined||req.body.name==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product name",
            });
        }
        if(req.body.weeklyprice==undefined||req.body.weeklyprice==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter your Product weeklyPrice",
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
        
        if(req.body.reservation==undefined||req.body.reservation==null){
            return res.status(200).json({
                "Success":false,
                "message":"please enter reservation",
            });
        }
        
        let busniesssuport=BusniessSuport();
        busniesssuport._id=mongoose.Types.ObjectId();
        busniesssuport.name=req.body.name;
        busniesssuport.weeklyprice=req.body.weeklyprice;
        busniesssuport.details=req.body.details;
        busniesssuport.timeFrom=req.body.timeFrom;
        busniesssuport.timeTo=req.body.timeTo;
        busniesssuport.contact=req.body.contact;
        busniesssuport.lat=req.body.lat;
        busniesssuport.lng=req.body.lng;
        busniesssuport.nearlat=Math.floor(req.body.lat);
        busniesssuport.nearlng=Math.floor(req.body.lng);
        busniesssuport.website=req.body.website;
        busniesssuport.image=req.file.path;
        busniesssuport.types=req.body.types;
        busniesssuport.options=req.body.options;
        busniesssuport.islands=req.body.islands;
        busniesssuport.reservation=req.body.reservation;
        busniesssuport.save(async function (err, product) {
            if(err){
                console.log(err);
            }else{
                res.redirect('BusniessSupport');
            }
           });
    },
    getBusniessSupport : async function(req,res){
        try {
            let bussniess=await BusniessSuport.find();
            return res.status(200).json({
                "Success":true,
                "BusniessSuport":bussniess,
            });
        } catch (error) {
            
        }
        
    },
}
// [{
//     path:'FarmandRanches',
//     model:'Farmandranches',
//     select:'name price details image lat lng'
// },
// {
//     path:'FarmerMarkets',
//     model:'FarmerMarkets',
//     select:'name price details image lat lng'   
// }]