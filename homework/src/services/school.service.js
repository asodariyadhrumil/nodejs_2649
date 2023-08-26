const { School } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
    return School.create(reqBody)
  };

  const listSchool = async (reqBody) => {
    return School.find({ $or: [ { is_active:true}]})
  };

  const deleteSchool = async (id) => {
    return School.findByIdAndDelete(id)
  };

   module.exports = { createSchool,listSchool,deleteSchool}