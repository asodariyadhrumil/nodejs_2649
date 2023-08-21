const { categoryService } = require("../services");

/** create category */
const createcategory = async (req, res) => {
  try {
    const reqBody = req.body;

    const category = await categoryService.createUser(reqBody);
    if (!category) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: reqBody,
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
    createcategory
}