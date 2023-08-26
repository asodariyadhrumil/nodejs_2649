const { busService } = require("../services");

/** create bus */
const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Bus create successfully!",
            data: { bus },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list bus */
const listBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const bus = await busService.listBus(reqBody);
        if (!bus) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Bus list successfully!",
            data: { bus },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete bus */
const deleteBus = async (req, res) => {
    try {
        const id =req.params.Id
        const bus = await busService.listBus();

        if (!bus) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await busService.deleteBus(id);
        res.status(200).json({
            success: true,
            message: "Bus delet successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {createBus,listBus,deleteBus};
