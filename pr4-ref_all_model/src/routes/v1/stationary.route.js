const express = require("express")
const {stationaryValidation} = require ("../../validations")
const {stationaryController} = require ("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create stationary
router.post(
"/create-stationary/",
validate(stationaryValidation.createStationary),
stationaryController.createStationary
);


module.exports =router;