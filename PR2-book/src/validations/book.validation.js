const Joi = require("joi");

/** create book */
const createbook = {
  body: Joi.object().keys({
    book_name: Joi.string().required().trim(),
   book_price: Joi.number().required().trim(),
   book_author: Joi.string().required().trim(),
  }),
};

/** GEt book list */
const getbookList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

module.exports = {
    createbook
}