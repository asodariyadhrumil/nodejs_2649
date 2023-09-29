const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const router = express.Router();


/** create category */
router.get(
  "/create-category",
  validate(categoryValidation.createcategory),
  categoryController.createcategory
);

module.exports = router;