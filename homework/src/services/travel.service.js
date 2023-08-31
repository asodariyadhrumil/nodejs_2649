const {travel} = require("../models");

 /**
  *  @param {object} reqBody
  * @returns {Promise<User>}
  */

 const createTravel = async (reqBody) =>{
    return travel.create(reqBody);
 };

 const getTravelList = async(req , res)=>{
   //  return travel.find();
    return travel.find({$or: [{is_active: true}]});
 };

 const deleteTravel = async(travelId)=>{
    return travel.findByIdAndDelete();
 };

   // Get travel details by id
const getTravelById = async (travelId) => {
   return travel.findById(travelId);
 };
 
   // travel details update by id
 const travelUpdate = async (travelId, updateBody) => {
   return travel.findByIdAndUpdate(travelId, { $set: updateBody });
 };
 
 module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    getTravelById,
    travelUpdate
 }