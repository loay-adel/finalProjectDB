const Product = require("../models/Product");
const { ApiError } = require("../utils/apiError");

exports.addProduct = async (req, res) => {
  const {
    name,
    description,
    price,
    image,
    category,
    discount,
    availableCountity,
    tags
  } = req.body;

  if (!name || !description || !price || !category || !availableCountity) {
    throw new ApiError("All fields are required", 400);
  }

  const product = await Product.create(req.body);

  res.status(201).json({ message: "Product added successfully", product });
};

exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findByIdAndDelete(productId);
  if (!product) throw new ApiError("Product not found", 404);

  res.status(200).json({ message: "Product deleted successfully" });
};
