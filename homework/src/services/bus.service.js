const { Bus } = require("../models");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<Bus>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody)
};

const listBus = async (reqBody) => {
  return Bus.find({ $or: [ { is_active:true}]})
};

const deleteBus = async (id) => {
  return Bus.findByIdAndDelete(id)
};

module.exports = { createBus,listBus,deleteBus}