const express = require("express")
const {musicValidation} = require ("../../validations")
const {musicController} = require ("../../controllers")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create music
router.post(
"/create-music/",
validate(musicValidation.createMusic),
musicController.createMusic
);

//list music
router.get(
"/list-music/",
validate(musicValidation.listMusic),
musicController.getMusicList
);

//delete music
router.delete(
"/delete-music/:Id",
musicController.deleteMusic
);



module.exports =router;