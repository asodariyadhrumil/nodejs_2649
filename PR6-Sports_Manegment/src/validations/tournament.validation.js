const joi = require("joi");

// create team
const createTournament = {
    body : joi.object().keys({
        tournament_name : joi.string().trim().required(),
        category : joi.string().trim().required(),
        team_players: joi.array().items(joi.string()).required(),
        start_date: joi.date().required(),
        end_date: joi.date().required(),
    })
};

module.exports = {
    createTournament
}