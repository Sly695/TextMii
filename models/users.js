const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  pseudo: String,
  email: String,
  password: String,
  token : String,
  date_inscription: Date,
  status: String,
  desc: String
});

var usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;