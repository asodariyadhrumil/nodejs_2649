const { stationaryService } = require('../services');

/* Create stationary */
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.createStationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary created successfully!",
            data:  stationary ,
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get stationary list */
const getStationaryList = async (req, res) => {
    try {
      const getList = await stationaryService.getStationaryList(req,res);

      res.status(200).json({
        success: true,
        message: "Get stationary list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete stationary */
const deleteStationary = async (req, res) => {
    try {
      const stationaryId = req.params.stationaryId;
      if (!stationaryId) {
        throw new Error("stationary not found!");
      }
  
      await stationaryService.deleteStationary(stationaryId);
  
      res.status(200).json({
        success: true,
        message: "stationary deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** stationary details update by id */
const stationaryUpdate = async (req, res) => {
  try {
    const stationaryId = req.params.stationaryId;
    const stationaryExists = await stationaryService.getStationaryById(stationaryId);
    if (!stationaryExists) {
      throw new Error("stationary not found!");
    }

    await stationaryService.stationaryUpdate(stationaryId, req.body);

    res.status(200).json({
      success: true,
      message: "stationary details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createStationary,
    getStationaryList,
    deleteStationary,
    stationaryUpdate
}