const Joi = require("joi")


// create Stationary

const createStationary = {
    body: Joi.object().keys({
        store_name: Joi.string().required().trim(),
        store_address: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        customer_name: Joi.string().required().trim(),
        product_name: Joi.string().required().trim(),
        product_price: Joi.number().integer(),
    })
}

// list Stationary

const listStationary = {
    query: Joi.object().keys({
        store_name: Joi.string().allow("").trim(),
        store_address: Joi.string().allow("").trim(),
        email: Joi.string().allow("").trim(),
        customer_name: Joi.string().allow("").trim(),
        product_name: Joi.string().allow("").trim(),
        product_price: Joi.number().integer(),
    })
}


module.exports = {createStationary,listStationary}