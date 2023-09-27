const express = require("express");

const userRoute = require("./user.route.js");
const categoryRoute = require("./category.route.js");
const galleryRoute = require("./gallery.route.js");
const tokenRoute = require("./token.route.js");
const matchRoute = require("./match.route.js");
const teamRoute = require("./team.route.js");
const tournamentRoute = require("./tournament.route.js");

const router = express.Router();

router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/gallery", galleryRoute);
router.use("/token", tokenRoute);
router.use("/match", matchRoute);
router.use("/team", teamRoute);
router.use("/tournament", tournamentRoute);

module.exports = router;