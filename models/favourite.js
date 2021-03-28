let mongoose = require('mongoose');

let favourite = new mongoose.Schema({
    farmandranches: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Farmandranches",
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
   
});

module.exports = mongoose.model('Favourite', favourite);