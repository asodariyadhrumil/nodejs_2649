const { gallery } = require("../models");

// create image
const createImage = async (reqBody) => {
    return gallery.create(reqBody);
};

// get image list
const getImageList = async (req,res) => {
    return gallery.find();
};

// delete image
const deleteImage = async (imageId) => {
    return gallery.findOneAndDelete(imageId);
};

// get image details by id
const getImageById = async (imageId) => {
    return gallery.findById(imageId)
};

// update image details
const updateImage = async (imageId, reqBody) => {
    return gallery.findByIdAndUpdate(imageId, { $set: reqBody });
};

module.exports = {
    createImage,
    getImageList,
    deleteImage,
    getImageById,
    updateImage
}
