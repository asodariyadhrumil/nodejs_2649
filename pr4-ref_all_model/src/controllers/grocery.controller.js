const { groceryService } = require('../services');

/* Create grocery */
const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;
        // console.log(reqBody);

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "grocery created successfully!",
            data:  grocery ,
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get grocery list */
const getGroceryList = async (req, res) => {
    try {

      const getList = await groceryService.getGroceryList(req,res);

      res.status(200).json({
        success: true,
        message: "Get grocery list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete grocery */
const deleteGrocery = async (req, res) => {
    try {
      const groceryId = req.params.groceryId;
      if (!groceryId) {
        throw new Error("grocery not found!");
      }
  
      await groceryService.deleteGrocery(groceryId);
  
      res.status(200).json({
        success: true,
        message: "grocery deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** grocery details update by id */
const groceryUpdate = async (req, res) => {
  try {
    const groceryId = req.params.groceryId;
    const groceryExists = await groceryService.getGroceryById(groceryId);
    if (!groceryExists) {
      throw new Error("grocery not found!");
    }

    await groceryService.groceryUpdate(groceryId, req.body);

    res.status(200).json({
      success: true,
      message: "grocery details updated successfully."
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    groceryUpdate
}