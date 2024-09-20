const express = require("express");

const { searchProducts } = require("../../controllers/shopControllers/searchController");

const router = express.Router();

router.get("/:keyword", searchProducts);

module.exports = router;
