const express = require("express");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const categoryRoute = require("./book.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);

module.exports = router;