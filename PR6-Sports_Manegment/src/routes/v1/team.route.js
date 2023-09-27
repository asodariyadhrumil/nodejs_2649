const express = require("express");
const {teamValidation} = require("../../validations");
const {teamController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

// create team
router.post(
    "/create-team",
    auth(),
    validate(teamValidation.createTeam),
    teamController.createTeam
);

// get team list
router.get(
    "/list",
    teamController.getTeamList
);

//get team by id
router.get(
    "/get-team/:teamId",
    auth(),
    teamController.getTeamById
);

//delete team
router.delete(
    "/delete-team/:teamId",
    auth(),
    teamController.deleteTeam
);

// update team
router.put(
    "/update-team/:teamId",
    auth(),
    teamController.updateTeam
);

module.exports = router;