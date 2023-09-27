const joi = require("joi");

// create team
const createTeam = {
    body : joi.object().keys({
        team_name : joi.string().trim().required(),
        team_disc : joi.string().trim().required(),
        team_players: joi.array().items(joi.string()).required(),
        category : joi.string().trim().required(),
        coach: joi.string().trim().required(),
        players : joi.string().trim().required()
    })
};

module.exports = {
    createTeam
}