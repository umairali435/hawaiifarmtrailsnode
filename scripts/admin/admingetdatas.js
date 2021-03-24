const mongoose=require('mongoose');
const Farmandranches=require("../../models/farmandranches");
module.exports={
    getFarmAndRanchesAdmin: async function(req,res){
     let farmandranch=await Farmandranches.find({});
     res.render('Farms&Ranches',{farmandranch});
    }
}