const Joi = require("joi");

// create mobile
const createMobile = {
    body : Joi.object().keys({
        mobile_name: Joi.string().trim().required(),
        mobile_company: Joi.string().trim().required(),
        mobile_info: Joi.string().trim().required(),
        mobile_price: Joi.number().integer().required()
    })
};

module.exports = {
    createMobile
}