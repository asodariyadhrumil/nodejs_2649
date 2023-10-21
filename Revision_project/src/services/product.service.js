const {product} = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

// Create product
const createProduct = async (reqBody) => {
    return product.create(reqBody);
};

// get product list
const getProductlist = async (req, res) => {
return product.find();
};

// delete product record by id
const deleteProduct = async (productId) => {
    return product.findByIdAndDelete(productId);
};

//update product record  by id
const updateProduct = async (productId, updateBody) => {
    return product.findByIdAndUpdate(productId, { $set: updateBody });
};

 //Get product details by id
const getProductDetails = async (productId) => {
    return product.findById(productId).populate({
        path: "category",
        select: ["category_name"],
      });;
  };
module.exports = {
    createProduct,
    getProductlist,
    deleteProduct,
    updateProduct,
    getProductDetails
}