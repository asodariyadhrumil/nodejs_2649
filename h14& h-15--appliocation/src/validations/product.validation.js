const Joi = require("joi");

// create product

const createProduct = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        product_available: Joi.string().required().trim(),
        product_weight: Joi.number().integer().required(),

    }),
};


// get product list
const getProductlist = {
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        product_available: Joi.string().required().trim(),
        product_weight: Joi.number().integer().required(),
    }),
};

/** product details update by id */
const updateProduct = {
    params: Joi.object().keys({
        productId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        product_name: Joi.string().required().trim(),
        product_description: Joi.string().required().trim(),
        product_price: Joi.number().integer().required(),
        product_available: Joi.string().required().trim(),
        product_weight: Joi.number().integer().required(),
    }),
  };

module.exports = {
    createProduct,
    getProductlist,
    updateProduct
}