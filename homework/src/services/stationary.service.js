const {stationary} = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createStationary= async (reqBody) => {
    return stationary.create(reqBody);
  };
  
  const getStationaryList = async (req,res) => {
    // return stationary.find();
    return stationary.find({$or : [{is_open : true}]});
  };
  
  const deleteStationary= async (stationaryId) => {
    return stationary.findByIdAndDelete(stationaryId);
  };

    // Get stationary details by id
const getStationaryById = async (stationaryId) => {
  return stationary.findById(stationaryId);
};

  // stationary details update by id
const stationaryUpdate = async (stationaryId, updateBody) => {
  return stationary.findByIdAndUpdate(stationaryId, { $set: updateBody });
};
  
  module.exports = {
    createStationary,
    getStationaryList,
    deleteStationary,
    getStationaryById,
    stationaryUpdate
  };