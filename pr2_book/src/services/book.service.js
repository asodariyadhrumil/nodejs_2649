const { book } = require("../models");


/**
 * Create book
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createbook = async (reqBody) => {
    return book.create(reqBody);
  };



  module.exports = {
    createbook
  }