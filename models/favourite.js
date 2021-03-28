let mongoose = require('mongoose');

let favourite = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmandranches",
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FarmerMarkets",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
   
});

module.exports = mongoose.model('Favourite', favourite);