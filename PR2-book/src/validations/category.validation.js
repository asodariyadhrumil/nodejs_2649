const Joi = require("joi");

/** create user */
const createcategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
  }),
};

/** GEt user list */
const getcategoryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

module.exports = {
    createcategory
}