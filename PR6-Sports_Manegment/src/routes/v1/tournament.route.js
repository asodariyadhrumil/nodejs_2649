const express = require("express");
const { tournamentValidation } = require("../../validations");
const { tournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

// create tournament
router.post(
    "create-tournament",
    auth(),
    validate(tournamentValidation.createTournament),
    tournamentController.createTournament
);

//get tournament list
router.get(
    "/list",
    tournamentController.getTournamentList
);

// delete tournament
router.delete(
    "/delete-tournament/:tournamentId",
    auth(),
    tournamentController.deleteTournament
)

// get tournament details by id
router.get(
    "get-tournament/:tournamentId",
    auth(),
    tournamentController.getTournamentById
)

//update tournament details
router.put(
    "update-tournament/:tournamentId",
    auth(),
    tournamentController.updateTournament
)

module.exports = router