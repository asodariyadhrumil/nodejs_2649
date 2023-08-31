const {movie} = require("../models");

/**
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createMovie = async (reqBody) =>{
    return movie.create(reqBody);
};

const getMovieList = async (req , res) =>{
    return movie.find();
};

const deleteMovie = async (movieId) =>{
    return movie.findByIdAndDelete(movieId);
};

  // Get movie details by id
  const getMovieById = async(movieId) =>{
    return movie.findById(movieId);
  };

    // update movie details by id
  const movieUpdate = async(movieId , updateBody) =>{
    return movie.findByIdAndUpdate(movieId , {$set : updateBody});
  };

module.exports = {
    createMovie,
    getMovieList,
    deleteMovie,
    getMovieById,
    movieUpdate
}