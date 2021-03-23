const mongoose=require('mongoose');
const farmSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
    type:{type:String},
    discount:{type:String},
    shipingPrice:{type:String},
});
module.exports=mongoose.model('FarmStand',farmSchema);