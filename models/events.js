const mongoose=require('mongoose');
const events=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    details:{type:String},
    image:{type:String,required:true},
    month:{type:String},
    discount:{type:String},
    lat:{type:String},
    lng:{type:String},
    website:{type:String},
    contact:{type:String},
    timeFrom:{type:String},
    timeTo:{type:String},
});
module.exports=mongoose.model('Events',events);