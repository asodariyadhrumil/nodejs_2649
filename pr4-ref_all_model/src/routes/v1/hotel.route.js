const express = require("express")
const  {hotelValidation} = require("../../validations");
const  {hotelController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create hotel
  router.post(
    "/create-hotel",
    validate(hotelValidation.createHotel),
    hotelController.createHotel
  );

// list hotel
router.get(
  "/list-hotel",
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

// delete hotel
router.delete(
  "/delete-hotel/:Id",
  hotelController.deleteHotel
);
module.exports = router;