const express = require("express");
const Blog = require("./blog.route");

const router = express.Router();

router.use("/blog", Blog);

module.exports = router;