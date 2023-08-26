const { schoolService } = require("../services");

/** create school*/
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "school create successfully!",
            data: { school },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** list school*/
const listSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.listSchool(reqBody);
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "school list successfully!",
            data: { school },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};


/** delete school*/
const deleteSchool = async (req, res) => {
    try {
        const id = req.params.Id
        const school = await schoolService.listSchool();
        if (!school) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await schoolService.deleteSchool(id)

        res.status(200).json({
            success: true,
            message: "school successfully delete!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports={createSchool,listSchool,deleteSchool}