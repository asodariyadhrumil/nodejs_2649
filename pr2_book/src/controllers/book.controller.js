const { bookService } = require("../services");

/** create book */
const createbook = async (req, res) => {
  try {
    const reqBody = req.body;

    const book = await bookService.createbook(reqBody);
    if (!book) {
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
    createbook
}