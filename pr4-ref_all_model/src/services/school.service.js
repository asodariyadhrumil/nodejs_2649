const { school } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

const createSchool = async (reqBody) => {
    return school.create(reqBody)
};

const getSchoolList = async(req , res) =>{
    // return school.find();
    return school.find({$or : [{is_open: true}]});
};

const deleteSchool = async (schoolId) => {
    return schhol.findByIdAndDelete(schoolId);
};

  // Get school details by id
 const getSchoolById = async (schoolId) =>{
    return school.findById(schoolId);
 };

   // update school details by id
 const schoolUpdate = async(schoolId , updateBody) =>{
    return school.findByIdAndUpdate(schoolId , {$set : updateBody});
 };


module.exports = {
    createSchool,
    getSchoolList,
    deleteSchool,
    getSchoolById,
    schoolUpdate
};