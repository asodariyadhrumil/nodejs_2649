const Joi = require("joi")

// create pharmacy

const createMovie = {
    body: Joi.object().keys({
        Movies_name: Joi.string().allow("").trim(),
        Actors_name: Joi.string().required().trim(),
        Directors_name: Joi.string().required().trim(),
        Reviews: Joi.string().required().trim(),
    })
}

// list pharmacy

const listMovie = {
    query: Joi.object().keys({
        Movies_name: Joi.string().allow("").trim(),
        Actors_name: Joi.string().allow("").trim(),
        Directors_name: Joi.string().allow("").trim(),
        Reviews: Joi.string().allow("").trim(),
    })
}


module.exports = {createMovie,listMovie}