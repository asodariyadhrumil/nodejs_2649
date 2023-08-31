const { schoolService } = require('../services');

/* Create school */
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "school created successfully!",
            data:  school ,
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get school list */
const getSchoolList = async (req, res) => {
    try {

      const getList = await schoolService.getSchoolList(req,res);

      res.status(200).json({
        success: true,
        message: "Get user list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete school */
const deleteSchool = async (req, res) => {
    try {
      const schoolId = req.params.schoolId;
      if (!schoolId) {
        throw new Error("school not found!");
      }
  
      await schoolService.deleteSchool(schoolId);
  
      res.status(200).json({
        success: true,
        message: "school deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** school details update by id */
  const schoolUpdate = async(req,res) =>{
    try {
      const schoolId = req.params.schoolId;
      const schoolExists = await schoolService.getSchoolById(schoolId);
      if(!schoolExists){
        throw new Error("school not found");
      }

      await schoolService.schoolUpdate(schoolId , req.body);
      res.status(200).json({
        success:true,
        message:"school detais updated successfully",
      })
    } catch (error) {
      res.status(400).json({
        success:false,
        message:error.message
      })
    }
  }

module.exports = {
    createSchool,
    getSchoolList,
    deleteSchool,
    schoolUpdate
}