const { stationaryService } = require("../services");

/** create stationary*/
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.createStationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary create successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list stationary*/
const listStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.listStationary(reqBody);
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "stationary list successfully!",
            data: { stationary },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** deletestationary*/
const deleteStationary = async (req, res) => {
    try {
        const id = req.params.Id
        const stationary = await stationaryService.listStationary();
        if (!stationary) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await stationaryService.deleteStationary(id)

        res.status(200).json({
            success: true,
            message: "stationary list successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


module.exports = {createStationary,listStationary,deleteStationary}