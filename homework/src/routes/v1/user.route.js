const express = require("express")
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const validate = require("../../middlewares/validate");

const router = express.Router();


//create user
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser,
);

module.exports = router;
    // //  list
    // router.get(
        //     "/list",
        //     validate(userValidation.getUserList),
//     userController.getUserList
// );

// // update-details, user_id
// router.put(
//     "/update-details/:userId",
//     validate(userValidation.updateDetails),
//     userController.updateDetails
//   );

//   // Delete, user_id
//   router.delete(
//     "/delete-user/:userId",
//     validate(userValidation.getDetails),
//     userController.deleteUser
//   );

// // router.get("/list",(req,res)=>{
// //   res.send(data)
// // })
// // let data = {
// //   "id" : 1,
// //   "name": "abhlo"
// // }