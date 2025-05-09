const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const users_routes = require("./routes/userRoutes");

const app = express();
const PORT = 6000;
const DB = process.env.DB;

app.use(cors());
app.use(express.json());

app.use("/api/users", users_routes);

app.use((req, res) => {
  return res.status(404).json({
    status: 404,
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    data: { data: null, message: "Internal server error" },
  });
});

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
console.log("useless comment for git to push");

main();

module.exports = app;
