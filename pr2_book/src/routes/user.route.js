const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const router = express.Router();

/** Get user details by id */
router.get(
    "/get-details/:userId",
    validate(userValidation.getDetails),
    userController.getUserDetails
  );
  connectDB();

module.exports = router;