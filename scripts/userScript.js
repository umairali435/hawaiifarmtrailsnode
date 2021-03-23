const User=require('../models/user');
const bcrypt=require('bcryptjs');
const mongoose=require('mongoose');
const saltRounds = 10;
module.exports={
registerUser: async function(req,res){
    if(req.body.name==undefined||req.body.name==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your username",
        });
    }
    if(req.body.email==undefined||req.body.email==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your email",
        });
    }
    if(req.body.password==undefined||req.body.password==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your password",
        });
    }
    let newUser=User();
    newUser._id=mongoose.Types.ObjectId(),
    newUser.name=req.body.name;
    newUser.email=req.body.email;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(req.body.password, salt);
    newUser.password=hash;
    newUser.save(async function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.send({ Success: true, user: user });
        }
    });
},
loginuser :async function(req,res){
    console.log("calling");
    if(req.body.email==undefined||req.body.email==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your email",
        });
    }
    if(req.body.password==undefined||req.body.password==null){
        return res.status(200).json({
            "Success":false,
            "message":"please enter your password",
        });
    }
    emailNumber = {
        email: req.body.email.toLowerCase().replace(/\s/g, ""),
      };
    console.log(req.body.email);
    let user=await User.findOne(emailNumber);
    let loginUser = user;
    if(user==null ||user.length<1){
        return res.send({ Success: false, message: "User Not Found" });
    }
    const match = await bcrypt.compare(req.body.password, loginUser.password);
    if(match){
        res.send({ Success: true, user: loginUser });
    }
}
}