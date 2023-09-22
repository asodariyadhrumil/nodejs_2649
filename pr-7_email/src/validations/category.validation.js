const Joi = require("joi");

// create category

const createCategory = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        cetegory_description: Joi.string().required().trim(),
    }),
};

// get category list
const getCategorylist = {
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        cetegory_description: Joi.string().required().trim(),
    }),
};

/** category details update by id */
const updateCategory = {
    params: Joi.object().keys({
     categoryId: Joi.string().required().trim(),
    }),
    body: Joi.object().keys({
        category_name: Joi.string().required().trim(),
        cetegory_description: Joi.string().required().trim(),
    }),
  };

module.exports = {
    createCategory,
    getCategorylist,
    updateCategory
}