const fs = require("fs");
const { galleryService } = require("../services");

// create image
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;

        if (req.file) {
            reqBody.gallery_image = req.file.filename;
        } else {
            throw new Error("Gallery image is required!");
        }

        const createImage = await galleryService.createImage(reqBody);

        res.status(200).json({
            success: true,
            message: "Gallery image created successfully.",
            data: createImage,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// get gallery image list by imageId
const getImageById = async (req, res) => {
    try {
        const imageExists = await galleryService.getImageById(
            req.params.imageId
        );
        if (!imageExists) {
            throw new Error("image not found!");
        }

        res.status(200).json({
            success: true,
            message: "image details get successfully!",
            data: imageExists,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

/** Get image list */
const getImageList = async (req, res) => {
    try {
        const getList = await galleryService.getImageList(req, res);

        res.status(200).json({
            success: true,
            data: getList,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// delete image
const deleteImage = async (req, res) => {
    try {
        const imageId = req.params.imageId;
        const imageExists = await galleryService.getImageById(imageId);
        if (!imageExists) {
            throw new Error("image not found!");
        }

        const deletedImage = await galleryService.deleteImage(imageId);
        if (deletedImage) {
            const filePath = `./public/gallery_images/${imageExists.gallery_image}`;
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "image delete successfully!",
            data: deletedImage,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};

// update image details
const updateImage = async (req, res) => {
    try {
        const reqBody = req.body;
        const imageId = req.params.imageId;
        const imageExists = await galleryService.getImageById(imageId);
        if (!imageExists) {
            throw new Error("image not found!");
        }

        if (req.file) {
            reqBody.gallery_image = req.file.filename;
        }

        const updatedImage = await galleryService.updateImage(
            imageId,
            reqBody
        );
        if (updatedImage) {
            if (req.file) {
                const filePath = `./public/gallery_images/${imageExists.gallery_image}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }
        } else {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "image details updated successfully!",
            data: updatedImage,
        });
    } catch (error) {
        res.status(error?.statusCode || 400).json({
            success: false,
            message:
                error?.message || "Something went wrong, please try again or later!",
        });
    }
};


module.exports = {
    createImage,
    getImageById,
    getImageList,
    deleteImage,
    updateImage
}
