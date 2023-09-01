const {travelService} = require("../services");

/* Create travel */
const createTravel = async(req,res) =>{
    try {
        const reqBody = req.body;
        const travel = await travelService.createTravel(reqBody);

        if(!travel){
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success : true,
            message : "travel created successfully",
            data : travel
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* Get travel list */
const getTravelList = async(req,res) =>{
    try {
        const getList = await travelService.getTravelList(req,res);

        res.status(200).json({
            success: true,
            message: "Get travel list successfully!",
            data: getList,
          });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* Delete travel */
const deleteTravel = async(req,res) =>{
    try {
        const travelId = req.params.travelId;
        if(!travelId){
            throw new Error("trip not found")
        };
        
        await travelService.deleteTravel(travelId);

        res.status(200).json({
            success:true,
            message: "trip deleted successfully"
        });
    } catch (error) {
     res.status(400).json({
        success:false,
        message: error.message
     });
    }
};

/** travel details update by id */
const travelUpdate = async (req, res) => {
    try {
      const travelId = req.params.travelId;
      const travelExists = await travelService.getTravelById(travelId);
      if (!travelExists) {
        throw new Error("travel not found!");
      }
  
      await travelService.travelUpdate(travelId, req.body);
  
      res.status(200).json({
        success: true,
        message: "travel details updated successfully."
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

module.exports = {
    createTravel,
    getTravelList,
    deleteTravel,
    travelUpdate
}