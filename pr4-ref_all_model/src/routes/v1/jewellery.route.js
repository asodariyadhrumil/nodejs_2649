const express = require("express")
const {jewelleryValidation} = require ("../../validations")
const {jewelleryController} = require ("../../controllers")
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
jewelleryController.getJewelleryList
);

//delete jewellery
router.delete(
"/delete-jewellery/:Id",
jewelleryController.deleteJewellery
);



module.exports =router;