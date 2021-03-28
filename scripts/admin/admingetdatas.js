const mongoose=require('mongoose');
const Farmandranches=require("../../models/farmandranches");
const CommunitySupportedAgriculture= require("../../models/csa"); //schema path
const FarmerMarkets=require("../../models/farmermarkets");
const Events=require("../../models/events");
const Types=require("../../models/types");
const Feature=require("../../models/features");
const Option=require("../../models/option");
const Island=require("../../models/island");
const FarmStand=require("../../models/farmstand");
const ShippingAddress=require("../../models/shippingAddress");
module.exports={
    getFarmAndRanchesAdmin: async function(req,res){
     let farmandranch=await Farmandranches.find({});
     let maintype=await Types.find({});
     let mainfeature=await Feature.find({});
     let mainoption=await Option.find({});
     let mainisland=await Island.find({});


     res.render('Farms&Ranches',{farmandranch,maintype,mainfeature,mainoption,mainisland});
    },
    // ------------findCSA--------------
    getFindCSA: async function(req,res){  //function name
        let findCSA = await CommunitySupportedAgriculture.find({}); //let findCSA is variable & findCommunitySupportedAgricultureCSA is path name;
        res.render('findaCSA',{findCSA});
    },
    //  ------------------Farmers Markets----------
    getFarmersMarkets:async function(req,res){
        let farmersMarkets =await FarmerMarkets.find({});
        let maintype=await Types.find({});
        let mainfeature=await Feature.find({});
        let mainoption=await Option.find({});
        let mainisland=await Island.find({});
   
        res.render('farmersmarkets',{farmersMarkets,maintype,mainfeature,mainoption,mainisland});
    },
    // ------------------farmstand---------
    getFarmstand:async function(req,res){
        let farmStand =await FarmStand.find({});
        let maintype=await Types.find({});
       
        res.render('farmersmarkets',{farmStand,maintype,mainfeature,mainoption,mainisland});
    },
    // -----------------Event--------------
    getEvent:async function(req,res){
        let mainEvent=await Events.find({});
        res.render('events',{mainEvent});
    },
    // -----------------Types-----------------
    typesGet:async function(req,res){
      let maintype=await Types.find({});
      res.render('Types',{maintype});
    },
    // ----------------features------------- 
    featuresGat:async function(req,res){
        let mainfeature=await Feature.find({});
        res.render('Features',{mainfeature});
    },
    // -------------option-------
    optionGet:async function(req,res){
        let mainoption=await Option.find({});
        res.render('Option',{mainoption});
    },
    // ----------------island------
    islandGet:async function(req,res){
        let mainisland=await Island.find({});
        res.render('Island',{mainisland});
    },
    // -------------------------for shippingAddress---------
    shippingAddressGet: async function(req,res){
        let mainShipingAddress=await ShippingAddress.find({});
        res.render('ShippingAddress',{mainShipingAddress});
    }
}