const express = require("express")
const  bookValidation = require("../../validations/book.validation");
const  bookController = require("../../controllers/book.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create book
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBook
);

// list book
router.get(
  "/list-book",
  validate(bookValidation.listBook),
  bookController.listBook
);

// delete book
router.delete(
  "/delete-book/:Id",
  bookController.deleteBook
);
module.exports = router;