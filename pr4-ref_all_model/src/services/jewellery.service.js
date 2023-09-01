const { jewellery } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createJewellery= async (reqBody) => {
    return jewellery.create(reqBody);
  };
  
  const getJewelleryList = async (req,res) => {
    // return jewellery.find();
    return jewellery.find({$or : [{is_available:true}]});
  };
  
  const deleteJewellery= async (jewelleryId) => {
    return jewellery.findByIdAndDelete(jewelleryId);
  };
  
    // Get jewellery details by id
const getJewelleryById = async (jewelleryId) => {
  return jewellery.findById(jewelleryId);
};

  // jewellery details update by id
const jewelleryUpdate = async (jewelleryId, updateBody) => {
  return jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
};
  
  module.exports = {
    createJewellery,
    getJewelleryList,
    deleteJewellery,
    getJewelleryById,
    jewelleryUpdate
  };