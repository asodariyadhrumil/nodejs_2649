const Joi = require("joi");

// create grocery

const  createGrocery = {
    body: Joi.object().keys({
        Products_name: Joi.string().required().trim(),
        Customers_name: Joi.string().required().trim(),
        Orders: Joi.string().required().trim(),
    }),
};
// list grocery

const  listGrocery = {
    query: Joi.object().keys({
        Products_name: Joi.string().allow("").trim(),
        Customers_name: Joi.string().allow("").trim(),
        Orders: Joi.string().allow("").trim(),
    }),
};

module.exports = {createGrocery,listGrocery}