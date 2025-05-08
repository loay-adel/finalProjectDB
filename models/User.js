const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  zip: { type: String, default: "" },
  country: { type: String, default: "" },
  isDefault: { type: Boolean, default: false },
});

const cartItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: String,
  description: String,
  image: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  availableQuantity: Number,
  thumbnail: String,
  images: [String],
  tags: [String],
  quantity: Number,
  subtotal: Number,
});

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, default: "" },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    addresses: [addressSchema],
    wishlist: [String],
    cart: [cartItemSchema],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
