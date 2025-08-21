const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true }, 
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true, // will add createdAt & updatedAt automatically
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
