const { grocery } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createGrocery= async (reqBody) => {
    return grocery.create(reqBody);
  };
  
  const getGroceryList = async (req,res) => {
    // return grocery.find();
    return grocery.find({$or: [{is_open: true}]});
  };
  
  const deleteGrocery= async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
  };
  
    // Get grocery details by id
const getGroceryById = async (groceryId) => {
  return grocery.findById(groceryId);
};

  // grocery details update by id
const groceryUpdate = async (groceryId, updateBody) => {
  return grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
};
  
  module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    getGroceryById,
    groceryUpdate
  };