const { hotel } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

const createHotel= async (reqBody) => {
  return hotel.create(reqBody);
};

const getHotelList = async (req,res) => {
  // return hotel.find();
  return hotel.find({$or : [{is_open : true}]});
};

const deleteHotel= async (hotelId) => {
  return hotel.findByIdAndDelete(hotelId);
};

  // Get hotel details by id
const getHotelById = async (hotelId) => {
  return hotel.findById(hotelId);
};

  // hotel details update by id
const hotelUpdate = async (hotelId, updateBody) => {
  return hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
};

module.exports = {
  createHotel,
  getHotelList,
  deleteHotel,
  getHotelById,
  hotelUpdate
};