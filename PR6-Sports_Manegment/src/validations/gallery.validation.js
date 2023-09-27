const joi = require("joi");

// create image and add image
const createImage = {
    body : joi.object().keys({
        image_name: joi.string().required().trim(),
        gallery_image: joi.string().allow("")
    })
};


module.exports={
    createImage
}
