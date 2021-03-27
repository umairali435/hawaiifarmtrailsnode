const mongoose=require('mongoose');
const type=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    typess:{type:String,required:true},
    
});
module.exports=mongoose.model('Features',type);