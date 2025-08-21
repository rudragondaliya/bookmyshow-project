const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    description:String,
    ReleaseDate : Date,
    genre: String,
    Duration: Number,
    posterUrl:String,
    bannerUrl:String,
    language:String,
    category:{ type:String}
},{
    timestamps:true
})

const movies = mongoose.model("Movie",movieSchema)

module.exports = movies;