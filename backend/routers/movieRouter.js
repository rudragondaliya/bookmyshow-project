const express = require("express");
const {  getMovie,addMovie,deleteMovie,updateMovie,getMovieById} = require("../controllers/movieController");
const upload = require("../middleWares/uploadMiddleWare")
const movieRouter = express.Router();

movieRouter.get("/", getMovie);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", upload.fields([{ name: "posterUrl" }, { name: "bannerUrl" }]), addMovie);
movieRouter.delete("/:id", deleteMovie);
movieRouter.put("/:id", upload.fields ([{name: "posterUrl"},{name: "bannerUrl"},]) ,updateMovie);

module.exports = movieRouter;
