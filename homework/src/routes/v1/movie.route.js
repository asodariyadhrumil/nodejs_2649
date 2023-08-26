const express = require("express")
const movieValidation = require ("../../validations/movie.validation")
const movieController = require ("../../controllers/movie.controller")
const validate = require("../../middlewares/validate")

const router = express.Router();

//create movie
router.post(
"/create-movie/",
validate(movieValidation.createMovie),
movieController.createMovie
);

//list movie
router.get(
"/list-movie/",
validate(movieValidation.listMovie),
movieController.listMovie
);

//delete movie
router.delete(
"/delete-movie/:Id",
movieController.deleteMovie
);



module.exports =router;