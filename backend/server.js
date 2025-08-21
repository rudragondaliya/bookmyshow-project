const bodyParser = require("body-parser");
const express = require("express");
const db = require("./config/db");
const app = express();
const cors = require("cors");
const movieRouter = require("./routers/movieRouter");
const router = require("./routers");
const port = 8100;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/uploads", express.static("uploads"));


app.use("/api",router)

app.listen(port,(error)=>{
    if(!error){
        db();
        console.log("Server is Started..");
        console.log("http://localhost:"+port);
    }
});