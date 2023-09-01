const Joi = require("joi")


// create jewelley

const createJewellery = {
    body: Joi.object().keys({
        jewellery_types: Joi.string().required().trim(),
        jewellery_Materials: Joi.string().required().trim(),
        jewellery_styles: Joi.string().required().trim(),
    })
}

// list jewelley

const listJewellery = {
    query: Joi.object().keys({
        jewellery_types: Joi.string().allow("").trim(),
        jewellery_Materials: Joi.string().allow("").trim(),
        jewellery_styles: Joi.string().allow("").trim(),
    })
}

module.exports = { createJewellery,listJewellery }