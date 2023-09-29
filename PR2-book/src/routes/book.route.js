const express = require("express");
const {bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const router = express.Router();

/** Get book details*/
router.get(
    "/create-book",
    validate(bookValidation.getDetails),
    bookController.getbookDetails
  );
  

  
/** Get book list*/
router.get(
    "/list",
    validate(bookValidation.getDetails),
    bookController.getbookDetails
  );
  connectDB();

module.exports = router;
