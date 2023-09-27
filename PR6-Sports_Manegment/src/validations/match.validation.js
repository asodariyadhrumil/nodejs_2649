const joi = require("joi");

// create match
const createMatch = {
    body: joi.object().keys({
        match_location: joi.string().trim().required(),
        match_date: joi.date().required(),
        teams: joi.array().items(joi.string()).required(),
        match_result: joi.string().trim().required()
    })
}

module.exports = {
    createMatch
}