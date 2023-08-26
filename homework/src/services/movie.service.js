const { Movie } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Movie>}
 */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody)
  };

  const listMovie = async (reqBody) => {
    return Movie.find({ $or: [ { is_active:true}]})
  };

  const deleteMovie = async (id) => {
    return Movie.findByIdAndDelete(id)
  };

   module.exports = { createMovie,listMovie,deleteMovie}