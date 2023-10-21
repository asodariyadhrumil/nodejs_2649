const { categoryService} = require("../services");

/* ----------------------------- create category ---------------------------- */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Category create successfully!",
            data: {
                category
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


//get category list
const getCategorylist = async (req, res) => {
    try {
        const getList = await categoryService.getCategorylist(req, res);

        res.status(200).json({
            success: true,
            message: "Get category list successfully..",
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

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const cateExists = await categoryService.deleteCategory(categoryId);
        if (!cateExists) {
            throw new Error("Category not found!");
        }

        await categoryService.deleteCategory(categoryId);

        res.status(200).json({
            success: true,
            message: "Category delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
/** Get Category details by id */
const getCategoryDetails = async (req, res) => {
    try {
      const getDetails = await categoryService.getCategoryDetails(
        req.params.categoryId
      );
      if (!getDetails) {
        throw new Error("Category not found!");
      }

      res.status(200).json({
        success: true,
        message: "Category details get successfully!",
        data: getDetails,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };


//update cetegory record by id

const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const cateExists = await categoryService.updateCategory(categoryId);
        if (!cateExists) {
            throw new Error("Category not found!");
        }

        await categoryService.updateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Category details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createCategory,
    getCategorylist,
    deleteCategory,
    updateCategory,
    getCategoryDetails
}