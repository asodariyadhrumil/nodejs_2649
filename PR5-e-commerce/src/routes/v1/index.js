const express = require("express");
const categoryRoute = require("./category.route.js");
const productRoute = require("./product.route.js");
const cartRoute = require("./cart.route.js");
const orderRoute = require("./order.route.js");
const userRoute = require("./user.route.js");


const router = express.Router();

router.use("/category", categoryRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);
router.use("/user", userRoute);


module.exports = router;