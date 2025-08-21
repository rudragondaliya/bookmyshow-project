const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required:true,
    },
    cinema:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "cinemas",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true,
    },
    availableSeats:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
})

const shows = mongoose.model('shows',showSchema)

module.exports = shows;