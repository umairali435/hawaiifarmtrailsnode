const express=require('express');
const router=express.Router();
const User=require('../scripts/userScript');
router.post('/register/user',(req,res)=>{
    User.registerUser(req, res);
});
router.post('/login/user',(req,res)=>{
    User.loginuser(req,res);
});
module.exports=router;