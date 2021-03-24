const express=require('express');
const http=require('http');
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const fs=require('fs');
const path = require('path');
let multer = require("multer");
bcrypt = require('bcryptjs'),
require('dotenv').config();
const User=require('./models/adminuser');
passport = require('passport');
cors = require("cors"),
LocalStrategy = require("passport-local");
const app=express();
app.set('view engine', 'ejs');
app.use('/admin', express.static(__dirname + '/admin'));
app.use('/uploads', express.static(__dirname + '/uploads'));
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
app.use(require("express-session")({
  secret: "funtime",
  resave: true,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use('local-login', new LocalStrategy({
  // by default, local strategy uses username and password, we will override with email
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback
},
  async function (req, email, password, done) { // callback with email and password from our form
    User.findOne({ 'email': email },
      async function (err, user) {
        if (err)
          return done(err);
        if (!user) {
          console.log('User Not Found with username ' + email);
          return done(null, false, 'no user found');
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return done(null, user);
        }
        else {
          return done(null, false, 'Incorrect Password.');
        }
      })

  }));
passport.serializeUser(function (user, done) {
  done(null, user._id);
});
passport.deserializeUser(function (id, done) {
  User.findById({ _id: id }).
  populate('roleId').
  exec(function (err, user) {
    done(err, user);
  });
  /* adminUser.findById(id, function (err, user) {
    done(err, user);
  }); */
});

app.use(function (req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.locals.currentUser = req.user;
  next();
});
app.use(cors());
const userRouter=require('./routes/user');
const userFarm=require('./routes/farmStand');
// const adminlogin=require('./routes/admin');
app.use('/user',userRouter);
app.use('/FarmStand',userFarm);
// app.use('/login',adminlogin);
app.get('/',(req,res)=>{
    res.redirect('/FarmStand/Admin');
});
const PORT=process.env.PORT||3000;
app.listen(PORT);