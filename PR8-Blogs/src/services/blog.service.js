const Blog = require("../models/blog");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Blog>}
 */
const createBlog = async (reqBody) => {
  return Blog.create(reqBody);
};
const listBlog = async () => {
  return Blog.find();
};

const getId = async (id) => {
  return Blog.findById(id);
};

const deleteBlog = async(id) =>{
  return Blog.findByIdAndDelete(id)
};

const updateBlog = async (id, updatebody) => {
  return Blog.findByIdAndUpdate(id, { $set: updatebody })
}

module.exports = { createBlog, listBlog, deleteBlog, updateBlog, getId }