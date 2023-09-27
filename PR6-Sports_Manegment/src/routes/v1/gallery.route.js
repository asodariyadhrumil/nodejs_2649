const express = require("express");
const { upload } = require("../../middlewares/upload");
const validate = require("../../middlewares/validate");
const { galleryValidation } = require("../../validations");
const { galleryController } = require("../../controllers");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** Create image */
router.post(
    "/create-image",
    auth(),
    upload.single("gallery_image"),
    validate(galleryValidation.createImage),
    galleryController.createImage
  );

  /** Get image details by id*/
  router.get(
    "/details/:imageId",
    auth(),
    galleryController.getImageById
  );

  /** Get gallery image list */
  router.get(
    "/list",
    galleryController.getImageList
  );

  /** Update image details */
  router.put(
    "/update-image/:imageId",
    auth(),
    upload.single("gallery_image"),
    galleryController.updateImage
  );

  /** Delete image */
  router.delete(
    "/delete-image/:imageId",
    auth(),
    galleryController.deleteImage
  );

  module.exports = router;
