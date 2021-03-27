const mongoose=require('mongoose');
const Farmandranches=require("../../models/farmandranches");
const CommunitySupportedAgriculture= require("../../models/csa"); //schema path
const FarmerMarkets=require("../../models/farmermarkets");
const Events=require("../../models/events");
const Types=require("../../models/types");
const Feature=require("../../models/features");
module.exports={
    getFarmAndRanchesAdmin: async function(req,res){
     let farmandranch=await Farmandranches.find({});
     let maintype=await Types.find({});
     res.render('Farms&Ranches',{farmandranch,maintype});
    },
    // ------------findCSA--------------
    getFindCSA: async function(req,res){  //function name
        let findCSA = await CommunitySupportedAgriculture.find({}); //let findCSA is variable & findCommunitySupportedAgricultureCSA is path name;
        res.render('findaCSA',{findCSA});
    },
    //  ------------------Farmers Markets----------
    getFarmersMarkets:async function(req,res){
        let farmersMarkets =await FarmerMarkets.find({});
        res.render('farmersmarkets',{farmersMarkets});
    },
    // -----------------Event--------------
    getEvent:async function(req,res){
        let mainEvent=await Events.find({});
        res.render('Events',{mainEvent});
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
    }
}