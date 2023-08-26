const { Travel } = require("../models");

/**
 * Create travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */

const createTravel = async (reqBody) => {
    return Travel.create(reqBody)
  };

  const listTravel = async (reqBody) => {
    return Travel.find({ $or: [ { is_active:true}]})
  };

  const deleteTravel = async (id) => {
    return Travel.findByIdAndDelete(id)
  };

   module.exports = { createTravel,listTravel,deleteTravel}