const { bus } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createBus= async (reqBody) => {
    return bus.create(reqBody);
  };
  
  const getBusList = async (req,res) => {
    // return bus.find();
    return bus.find({$or : [{is_active : true}]});
  };
  
  const deleteBus= async (busId) => {
    return bus.findByIdAndDelete(busId);
  };
  
  // Get bus details by id
  const getBusById = async (busId) =>{
    return bus.findById(busId);
  };

  // update bus details by id
  const busUpdate = async (busId , updateBody) =>{
    return bus.findByIdAndUpdate(busId , {$set : updateBody});
  };
  
  module.exports = {
    createBus,
    getBusList,
    deleteBus,
    getBusById,
    busUpdate
  };