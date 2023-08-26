const { Stationary} = require("../models");

/**
 * Create Stationary
 * @param {object} reqBody
 * @returns {Promise<Stationary>}
 */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody)
};

  const listStationary = async (reqBody) => {
    return Stationary.find({ $or: [ { is_active:true}]})
  };

  const deleteStationary = async (id) => {
    return Stationary.findByIdAndDelete(id)
  };

module.exports = { createStationary,listStationary,deleteStationary }