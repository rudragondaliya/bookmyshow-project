const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    movies:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Movie',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,  
    },
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5,
    },
    Comment:{
        type:String,
        trim:true,
        maxlength:500,
    },
},{
    timestamps:true,
})

const reviews = mongoose.model("reviews",reviewSchema)

module.exports = reviews;