const express = require("express");
// const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const bookRoute = require("./book.route");
const categoryRoute = require("./category.route");
const hotelRoute = require("./hotel.route");
const busRoute = require("./bus.route");
const schoolRoute = require("./school.route");
const travelRoute = require("./travel.route");
const jewelleryRoute = require("./jewellery.route");
const stationaryRoute = require("./stationary.route");
const movieRoute = require("./movie.route");
const pharmacyRoute = require("./pharmacy.route");
const musicRoute = require("./music.route");
const groceryRoute = require("./grocery.route");

const router = express.Router();

// router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/book", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/bus", busRoute);
router.use("/school", schoolRoute);
router.use("/travel", travelRoute);
router.use("/jewellery", jewelleryRoute);
router.use("/stationary", stationaryRoute);
router.use("/movie", movieRoute);
router.use("/pharmacy", pharmacyRoute);
router.use("/music", musicRoute);
router.use("/grocery", groceryRoute);

module.exports = router;