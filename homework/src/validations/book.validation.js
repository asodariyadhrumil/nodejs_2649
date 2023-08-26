const Joi = require("joi");

// create book

const  createBook = {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_desc: Joi.string().required().trim(),
        book_condition: Joi.string().required().trim(),
        book_price: Joi.string().required().trim(),
        book_pages: Joi.string().required().trim(),
    }),
};

const  listBook = {
    qurey: Joi.object().keys({
        book_name: Joi.string().allow("").trim(),
        book_desc: Joi.string().allow("").trim(),
        book_condition: Joi.string().allow("").trim(),
        book_price: Joi.string().allow("").trim(),
        book_pages: Joi.string().allow("").trim(),
    }),
};

module.exports = {createBook,listBook}