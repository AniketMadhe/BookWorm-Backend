const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

module.exports = new mongoose.model("Book", bookSchema);
