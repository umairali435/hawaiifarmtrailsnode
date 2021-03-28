let mongoose = require('mongoose');

let favourite = new mongoose.Schema({
    FarmandRanches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmandranches",
    },
    FarmerMarkets: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FarmerMarkets",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
   
});

module.exports = mongoose.model('Favourite', favourite);