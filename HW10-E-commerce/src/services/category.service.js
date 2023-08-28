const {category} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createCategory = async(reqBody) =>{
    return category.create(reqBody);
};

const getCategoryList = async(req,res) =>{
    return category.find();
};

const deleteCategory = async(categoryId) =>{
    return category.findByIdAndDelete(categoryId);
};

module.exports={
    createCategory,
    getCategoryList,
    deleteCategory
}