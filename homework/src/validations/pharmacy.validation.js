const Joi = require("joi")


// create pharmacy

const createPharmacy = {
    body: Joi.object().keys({
        customers_name: Joi.string().required().trim(),
        customers_phone: Joi.number().integer(),
        inventory: Joi.string().required().trim(),
        orderitems: Joi.string().required().trim(),
        sales: Joi.string().required().trim(),
    })
}
// list pharmacy

const listPharmacy = {
    query: Joi.object().keys({
        customers_name: Joi.string().allow("").trim(),
        customers_phone: Joi.number().integer(),
        inventory: Joi.string().allow("").trim(),
        orderitems: Joi.string().allow("").trim(),
        sales: Joi.string().allow("").trim(),
    })
}

module.exports = { createPharmacy,listPharmacy }