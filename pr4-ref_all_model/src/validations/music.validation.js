const Joi = require("joi")

// create music

const createMusic = {
    body: Joi.object().keys({
        Artists_name: Joi.string().required().trim(),
        Songs_name: Joi.string().required().trim(),
        Songs_duration: Joi.string().required().trim(),
        Playlists: Joi.string().required().trim(),
    })
}

// list music

const listMusic = {
    query: Joi.object().keys({
        Artists_name: Joi.string().allow("").trim(),
        Songs_name: Joi.string().allow("").trim(),
        Songs_duration: Joi.string().allow("").trim(),
        Playlists: Joi.string().allow("").trim(),
    })
}

module.exports={createMusic,listMusic}