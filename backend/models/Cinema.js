const mongoose = require("mongoose")

const cinemaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required :true,
    },
    totalScreens:{
        type:String,
        required:true,
    }
},{
    timestamps:true
})

const cinema = mongoose.model("cinemas",cinemaSchema)

module.exports = cinema;