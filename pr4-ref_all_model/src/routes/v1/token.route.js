const express = require("express");

const router = express.Router();


router.post(
    "/create-token",
    validate(tokenValidation.generateToken),
    tokenController.generateToken
  );

  router.get("/verify-token", auth(), tokenController.verifyToken);

  module.exports = router;