const express = require("express")
const  busValidation = require("../../validations/bus.vlaidation");
const  busController = require("../../controllers/bus.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create bus
router.post(
  "/create-bus",
  validate(busValidation.createBus),
  busController.createBus
);

// list bus
router.get(
  "/list-bus",
  validate(busValidation.listBus),
  busController.listBus
);


// delete bus
router.delete(
  "/delete-bus/:Id",
  busController.deleteBus
);


module.exports = router;