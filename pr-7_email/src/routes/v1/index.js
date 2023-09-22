const express = require("express");
const categoryRoute = require("./category.route.js");
const subCategoryRoute = require("./subCategory.route.js");
const subChildCategoryRoute = require("./subChildCategory.route.js");
const productRoute = require("./product.route.js");
const cartRoute = require("./cart.route.js");
const orderRoute = require("./order.route.js");
const userRoute = require("./user.route.js");
const tokenRoutes = require("./token.route.js");




const router = express.Router();

router.use("/category", categoryRoute);
router.use("/subCategory", subCategoryRoute);
router.use("/subChildCategory", subChildCategoryRoute);
router.use("/product", productRoute);
router.use("/cart", cartRoute);
router.use("/order", orderRoute);
router.use("/user", userRoute);
router.use("/token", tokenRoutes);





module.exports = router;