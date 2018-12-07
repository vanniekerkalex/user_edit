const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  login: String,
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  campus: String,
  state: String,
  year: Number,
  role: String,
  lastLoggedOn: String
});

module.exports = mongoose.model("User", userSchema);
