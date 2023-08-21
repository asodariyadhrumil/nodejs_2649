
const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const router = express.Router();


/** create category */
router.get(
  "/create-category",
  categoryController.createcategory
);

/** Get category list */
// router.get(
//   "/list",
//   categoryController.getcategoryList
// );
module.exports = router;