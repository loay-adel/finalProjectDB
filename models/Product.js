const mongoose = require("mongoose");

const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
  category: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  rating: Number,
  availableCountity: Number,
  tags: [String],
});

const Product = mongoose.model("products", product);

module.exports = Product;
