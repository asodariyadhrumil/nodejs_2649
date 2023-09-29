const express = require("express");
const router = express.Router();
const { blogValidation } = require("../../validation");
const { blogController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const { upload } = require("../../middlewares/upload");


/** Creat blog list */

router.post(
    "/create-blog",
    upload.single("Image"),
    validate(blogValidation.createBlog),
    blogController.createBlog
);

/** Get blog list */

router.get(
    "/list-blog",
    validate(blogValidation.listBlog),
    blogController.listBlog
);

/** Delete blog list */

router.delete(
    "/delete-blog/:id",
    blogController.deleteBlog
);

// Update blog

router.put(
    "/update-blog/:id",
    blogController.updateBlog
);

router.get(
    "/",
    blogController.Blogpage
);

module.exports = router