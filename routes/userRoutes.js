const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  updateUser,
} = require("../controllers/users");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

module.exports = router;
