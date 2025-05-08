const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");

const users_routes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;
const DB = process.env.DB;

app.use(cors());
app.use(express.json());

app.use("/api/users", users_routes);

app.use((req, res) => {
  return res.status(200).json("it is ok");
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

main();
