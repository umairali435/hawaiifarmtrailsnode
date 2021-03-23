const mongoose=require('mongoose');
const shippingAddress=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    houseno:{type:String,required:true},
    city:{type:String},
    country:{type:String,required:true},
    note:{type:String},
    status:{type:String},
});
module.exports=mongoose.model('ShippingAddress',shippingAddress);