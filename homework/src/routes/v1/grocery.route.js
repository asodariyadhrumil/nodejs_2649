const express = require("express")
const  groceryValidation = require("../../validations/grocery.validation");
const  groceryController = require("../../controllers/grocery.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create grocery
  router.post(
    "/create-grocery",
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
  );
// list grocery
  router.get(
    "/list-grocery",
    validate(groceryValidation.listGrocery),
    groceryController.listGrocery
  );
// delete grocery
  router.delete(
    "/delete-grocery/:Id",
    groceryController.deleteGrocery
  );


  module.exports = router;