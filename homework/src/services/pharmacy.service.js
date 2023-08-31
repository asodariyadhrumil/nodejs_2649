const { pharmacy } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createPharmacy= async (reqBody) => {
    return pharmacy.create(reqBody);
  };
  
  const getPharmacyList = async (req,res) => {
    // return pharmacy.find();
    return pharmacy.find({$or : [{is_available:true}]});
  };
  
  const deletePharmacy= async (pharmacyId) => {
    return pharmacy.findByIdAndDelete(pharmacyId);
  };

    // Get pharmacy details by id
const getPharmacyById = async (pharmacyId) => {
  return pharmacy.findById(pharmacyId);
};

  // pharmacy details update by id
const pharmacyUpdate = async (pharmacyId, updateBody) => {
  return pharmacy.findByIdAndUpdate(pharmacyId, { $set: updateBody });
};
  
  
  module.exports = {
    createPharmacy,
    getPharmacyList,
    deletePharmacy,
    getPharmacyById,
    pharmacyUpdate
  };