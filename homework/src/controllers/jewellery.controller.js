const { jewelleryService } = require('../services');

/* Create jewellery */
const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;
        // console.log(reqBody);

        const jewellery = await jewelleryService.createJewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "jewellery created successfully!",
            data:  jewellery ,
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get jewellery list */
const getJewelleryList = async (req, res) => {
    try {

      const getList = await jewelleryService.getJewelleryList(req,res);

      res.status(200).json({
        success: true,
        message: "Get jewellery list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete jewellery */
const deleteJewellery = async (req, res) => {
    try {
      const jewelleryId = req.params.jewelleryId;
      if (!jewelleryId) {
        throw new Error("jewellery not found!");
      }
  
      await jewelleryService.deleteJewellery(jewelleryId);
  
      res.status(200).json({
        success: true,
        message: "jewellery deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** jewellery details update by id */
const jewelleryUpdate = async (req, res) => {
  try {
    const jewelleryId = req.params.jewelleryId;
    const jewelleryExists = await jewelleryService.getJewelleryById(jewelleryId);
    if (!jewelleryExists) {
      throw new Error("jewellery not found!");
    }

    await jewelleryService.jewelleryUpdate(jewelleryId, req.body);

    res.status(200).json({
      success: true,
      message: "jewellery details updated successfully."
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createJewellery,
    getJewelleryList,
    deleteJewellery,
    jewelleryUpdate
}