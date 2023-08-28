const express = require("express");

const userRoute = require("./user.route.js");
const productRoute = require("./product.route.js");
const categoryRoute = require("./category.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);

module.exports = router;