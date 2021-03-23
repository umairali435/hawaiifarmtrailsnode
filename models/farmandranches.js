const mongoose=require('mongoose');
const farmandranches=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    price:{type:String,required:true},
    details:{type:String},
    image:{type:String,required:true},
    type:{type:String},
    lat:{type:String},
    lng:{type:String},
    website:{type:String},
    contact:{type:String},
    timeFrom:{type:String},
    timeTo:{type:String},
    reservation:{type:String},
    features:{type:String},
});
module.exports=mongoose.model('Farmandranches',farmandranches);