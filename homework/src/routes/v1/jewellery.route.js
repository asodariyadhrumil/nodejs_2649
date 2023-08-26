const express = require("express")
const jewelleryValidation = require ("../../validations/jewellery.validation")
const jewelleryController = require ("../../controllers/jewellery.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create jewellery
router.post(
"/create-jewellery/",
validate(jewelleryValidation.createJewellery),
jewelleryController.createJewellery
);

//list jewellery
router.get(
"/list-jewellery/",
validate(jewelleryValidation.listJewellery),
jewelleryController.listJewellery
);

//delete jewellery
router.delete(
"/delete-jewellery/:Id",
jewelleryController.deleteJewellery
);



module.exports =router;