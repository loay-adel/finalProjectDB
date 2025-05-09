const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const users_routes = require("./routes/userRoutes");
const product_routes = require("./routes/productRoutes");
const errorHandling = require("./middlewares/errorHandling");
require("dotenv").config();

const app = express();
const PORT = 6000;
const DB = process.env.DB;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", users_routes);
app.use("/api/product", product_routes);

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    message: "Route not found",
  });
});


app.use(errorHandling);

async function main() {
  try {
    await mongoose.connect(DB);
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port: ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

main();

module.exports = app;
