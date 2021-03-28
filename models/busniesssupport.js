const mongoose=require('mongoose');
const busniesssuport=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    weeklyprice:{type:String,required:true},
    details:{type:String},
    image:{type:String,required:true},
    type:{type:String},
    lat:{type:String},
    lng:{type:String},
    nearlat:{type:String},
    nearlng:{type:String},
    website:{type:String},
    contact:{type:String},
    timeFrom:{type:String},
    timeTo:{type:String},
    reservation:{type:String},
    types:{type:String},
    options:{type:String},
    islands:{type:String},
});
module.exports=mongoose.model('BusniessSuport',busniesssuport);