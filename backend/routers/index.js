const express = require("express");
const movieRouter = require("./movieRouter");
const authRouter = require("./authRouter");
const router = express.Router();

router.use("/movies",movieRouter)
router.use("/users",authRouter)

module.exports = router;    