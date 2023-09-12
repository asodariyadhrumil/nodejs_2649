const express = require("express")
const {pharmacyValidation} = require ("../../validations")
const {pharmacyController} = require ("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create pharmacy
router.post(
"/create-pharmacy/",
validate(pharmacyValidation.createPharmacy),
pharmacyController.createPharmacy
);

//list pharmacy
router.get(
"/list-pharmacy/",
validate(pharmacyValidation.listPharmacy),
pharmacyController.getPharmacyList
);

//delete pharmacy
router.delete(
"/delete-pharmacy/:Id",
pharmacyController.deletePharmacy
);



module.exports =router;