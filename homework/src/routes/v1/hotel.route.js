const express = require("express")
const  hotelValidation = require("../../validations/hotel.validation");
const  hotelController = require("../../controllers/hotel.controller");
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
  validate(hotelValidation.listhotel),
  hotelController.listHotel
);

// delete hotel
router.delete(
  "/delete-hotel/:Id",
  hotelController.deleteHotel
);
module.exports = router;