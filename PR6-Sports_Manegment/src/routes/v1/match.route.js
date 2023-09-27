const express = require("express");
const {matchValidation} = require("../../validations");
const {matchController} = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

// create match
router.post(
    "/create-match",
    auth(),
    validate(matchValidation.createMatch),
    matchController.createMatch
);

// get match list
router.get(
    "/list",
    matchController.getMatchList
);

//get match by id
router.get(
    "/get-match/:matchId",
    auth(),
    matchController.getMatchById
);

//delete match
router.delete(
    "/delete-match/:matchId",
    auth(),
    matchController.deleteMatch
);

// update match
router.put(
    "/update-match/:matchId",
    auth(),
    matchController.updateMatch
);

module.exports = router;