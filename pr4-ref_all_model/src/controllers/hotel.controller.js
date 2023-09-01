const { hotelService } = require('../services');

/* Create hotel */
const createHotel = async (req, res) => {
  try {
    const reqBody = req.body;

    const hotel = await hotelService.createHotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "hotel created successfully!",
      data: hotel,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get hotel list */
const getHotelList = async (req, res) => {
  try {
    const getList = await hotelService.getHotelList(req, res);

    res.status(200).json({
      success: true,
      message: "Get hotel list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete hotel */
const deleteHotel = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;

    if (!hotelId) {
      throw new Error("hotel not found!");
    }

    await hotelService.deleteHotel(hotelId);

    res.status(200).json({
      success: true,
      message: "hotel deleted successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** hotel details update by id */
const hotelUpdate = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const hotelExists = await hotelService.getHotelById(hotelId);
    if (!hotelExists) {
      throw new Error("hotel not found!");
    }

    await hotelService.hotelUpdate(hotelId, req.body);

    res.status(200).json({
      success: true,
      message: "hotel details updated successfully."
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createHotel,
  getHotelList,
  deleteHotel,
  hotelUpdate
}