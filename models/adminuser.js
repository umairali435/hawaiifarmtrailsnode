const mongoose=require('mongoose');
const adminuserSchema=mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    updated: { type: Date, default: Date.now },

    
});
module.exports=mongoose.model('AdminUser',adminuserSchema);
