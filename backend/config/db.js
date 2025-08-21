const mongoose = require("mongoose");

const db =async()=>{
    try {
        await mongoose.connect("mongodb+srv://gondaliyarudra2516:12345@product.4inbxkp.mongodb.net/bookMyShow")
        console.log('Database Connected...');
        
    } catch (error) {
        console.log(error.message);
        
    }
}

module.exports = db;