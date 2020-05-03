const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beachSchema = new Schema({
  name: String,
  image: String,
  location: String,
  quality: String
});

module.exports = mongoose.model("Beach", beachSchema);
