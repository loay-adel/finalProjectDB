const express = require("express");
const { addProduct, deleteProduct } = require("../controllers/product");
const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/add-product", addProduct);
router.delete("/delete-product/:productId", deleteProduct);

module.exports = router;
