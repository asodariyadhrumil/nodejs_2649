const { Pharmacy } = require("../models");

/**
 * Create pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */

const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody)
  };

  const listPharmacy = async (reqBody) => {
    return Pharmacy.find({ $or: [ { is_active:true}]})
  };

  const deletePharmacy = async (id) => {
    return Pharmacy.findByIdAndDelete(id)
  };

   module.exports = { createPharmacy,listPharmacy,deletePharmacy}