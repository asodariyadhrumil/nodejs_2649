const Joi = require("joi");

/** create user */
const createBlog = {
  body: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().required().trim(),
    countryOfOrigin: Joi.string().required().trim(),
    Headline: Joi.string().required().trim(),
    Desc: Joi.string().required().trim(),
    Author_Name: Joi.string().required().trim(),
    publisher: Joi.string().allow("").trim(),
    Position: Joi.string().required().trim(),

  }),
};
const listBlog = {
  query: Joi.object().keys({
    Image: Joi.string().allow(""),
    Date: Joi.string().allow("").trim(),
    countryOfOrigin: Joi.string().allow("").trim(),
    Headline: Joi.string().allow("").trim(),
    Desc: Joi.string().allow("").trim(),
    Author_Name: Joi.string().allow("").trim(),
    publisher: Joi.string().allow("").trim(),
    Position: Joi.string().allow("").trim(),

  }),
};

module.exports = {
    createBlog,
    listBlog
};