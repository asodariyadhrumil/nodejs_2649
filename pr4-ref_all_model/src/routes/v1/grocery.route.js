const express = require("express")
const  {groceryValidation} = require("../../validations");
const  {groceryController} = require("../../controllers");
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
    groceryController.getGroceryList
  );
// delete grocery
  router.delete(
    "/delete-grocery/:Id",
    groceryController.deleteGrocery
  );


  module.exports = router;