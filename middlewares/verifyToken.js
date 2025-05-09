const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { ApiError } = require("../utils/apiError");
const User = require("../models/User");

dotenv.config();

const verifyToken = async (req, res, next) => {
  let token;
  if (req.cookies["accessToken"]) {
    token = req.cookies["accessToken"];
  }

  if (!token) return next(new ApiError("You are not authenticated.", 400));

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
    if (err) return next(new ApiError("Token is not valid", 401));
    req.userId = user.id;
    const userDoc = await User.findById(user.id);
    if (!userDoc) return next(new ApiError("User not found", 404));
    next();
  });
};

module.exports = { verifyToken };
