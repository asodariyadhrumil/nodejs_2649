const { Hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody)
};

const listHotel = async (reqBody) => {
  return Hotel.find({ $or: [ { is_active:true}]})
};

const deleteHotel = async (id) => {
  return Hotel.findByIdAndDelete(id)
};

 module.exports = { createHotel,listHotel,deleteHotel}