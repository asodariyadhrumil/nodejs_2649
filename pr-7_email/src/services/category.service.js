const {category} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

// Create category
const createCategory = async (reqBody) => {
    return category.create(reqBody);
};

// get category list
const getCategorylist = async (req, res) => {
    return category.find();
};

// delete category record by id
const deleteCategory = async (categoryId) => {
    return category.findByIdAndDelete(categoryId);
};

//update category record  by id
const updateCategory = async (categoryId, updateBody) => {
    return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

 //Get category details by id
const getCategoryDetails = async (categoryId) => {
    return category.findById(categoryId);
  };

module.exports = {
    createCategory,
    getCategorylist,
    deleteCategory,
    updateCategory,
    getCategoryDetails
}