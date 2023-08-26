const { travelService } = require("../services");

/** create travel*/
const createTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const travel = await travelService.createTravel(reqBody);
        if (!travel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stravel create successfully!",
            data: { travel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** list travel*/
const listTravel = async (req, res) => {
    try {
        const reqBody = req.body;

        const travel = await travelService.listTravel(reqBody);
        if (!travel) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stravel list successfully!",
            data: { travel },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list travel*/
const deleteTravel = async (req, res) => {
    try {
        const id = req.params.Id
        const travel = await travelService.listTravel();
        if (!travel) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await travelService.deleteTravel(id)

        res.status(200).json({
            success: true,
            message: "travel successfully delete!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports ={createTravel,listTravel,deleteTravel}
