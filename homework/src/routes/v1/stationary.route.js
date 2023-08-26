const express = require("express")
const stationaryValidation = require ("../../validations/stationary.validation")
const stationaryController = require ("../../controllers/stationary.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create stationary
router.post(
"/create-stationary/",
validate(stationaryValidation.createStationary),
stationaryController.createStationary
);


module.exports =router;