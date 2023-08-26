const express = require("express")
const travelValidation = require ("../../validations/travel.validation")
const travelController = require ("../../controllers/travel.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create travel
router.post(
"/create-travel/",
validate(travelValidation.createTravel),
travelController.createTravel
);

//list travel
router.get(
"/list-travel/",
validate(travelValidation.listTravel),
travelController.listTravel
);

//delete travel
router.delete(
"/delete-travel/:Id",
travelController.deleteTravel
);



module.exports =router;