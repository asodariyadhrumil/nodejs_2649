const {productService} = require("../services");

//create product
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        const product = await productService.createProduct(reqBody);
        if (!product) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "product create successfully!",
            data: {
                product
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

//get product list
const getProductlist = async (req, res) => {
    try {
        const getList = await productService.getProductlist(req, res);

        res.status(200).json({
            success: true,
            message: "Get product list successfully..",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// delete product record  by id

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const proExists = await productService.deleteProduct(productId);
        if (!proExists) {
            throw new Error("Category not found!");
        }

        await categoryService.deleteProduct(productId);

        res.status(200).json({
            success: true,
            message: "product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
/** Get product details by id */
const getProductDetails = async (req, res) => {
    try {
      const getDetails = await productService.getCategoryDetails(
        req.params.productId
      );
      if (!getDetails) {
        throw new Error("product not found!");
      }

      res.status(200).json({
        success: true,
        message: "product details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


//update product record by id

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.categoryId;

        const proExists = await productService.updateProduct(productId);
        if (!proExists) {
            throw new Error("product not found!");
        }

        await categoryService.updateProduct(productId, req.body);

        res.status(200).json({
            success: true,
            message: "product details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


module.exports = {
    createProduct,
    getProductlist,
    deleteProduct,
    updateProduct,
    getProductDetails

}
