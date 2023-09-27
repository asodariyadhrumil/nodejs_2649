const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create category info */
router.post(
  "/create-category",
  auth(),
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** Get category list */
router.get(
  "/list",
  categoryController.getCategoryList
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  auth(),
  categoryController.deleteCategory
);

// get category by id
router.get(
  "/get-category/:categoryId",
  categoryController.getCategoryById
)

/** update category */
router.put(
  "/update-category/:categoryId",
  auth(),
  categoryController.updateCategory
)

module.exports = router;