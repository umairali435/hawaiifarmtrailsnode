const express=require('express');
const http=require('http');
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const fs=require('fs');
const path = require('path');
let multer = require("multer");
require('dotenv').config();

const app=express();
app.set('view engine', 'ejs');
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/uploadFile', express.static(__dirname + '/uploadFile'));
app.use(express.static(path.join(__dirname+'/public')));  

app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
let dbUser = process.env.DB_USERNAME;
let dbPass = process.env.DB_PASSWORD;
const uri=`mongodb+srv://${dbUser}:${dbPass}@cluster0.hidt5.mongodb.net/hawaiifarmtrails?retryWrites=true&w=majority`;
mongoose.connect(uri,{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})  
.then(()=>console.log('connected to db'))  
.catch((err)=>console.log('connection error',err));
mongoose.Promise=global.Promise;
const userRouter=require('./routes/user');
const userFarm=require('./routes/farmStand');
app.use('/user',userRouter);
app.use('/FarmStand',userFarm);
app.get('/',(req,res)=>{
    res.redirect('/FarmStand/home');
});
const PORT=process.env.PORT||3000;
app.listen(PORT);