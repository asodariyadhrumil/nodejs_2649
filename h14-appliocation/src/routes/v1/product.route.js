const express = require("express");
const {productValidation} = require("../../validations");
const {productController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

//create product
router.post(
    "/create-product",
    validate(productValidation.createProduct),
    productController.createProduct
);
// get product list
router.get(
    "/list",
    productController.getProductlist
);
//delete category
router.delete(
    "/delete/:productId",
    productController.deleteProduct,

)
// update category
router.put(
    "/update-product/:categoryId",
    productController.updateProduct
)

/** Get category details by id */
router.get(
    "/get-details/:productId",
    productController.getProductDetails
  );

module.exports = router;