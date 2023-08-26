const { pharmacyService } = require("../services");

/** create pharmacy*/
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.createPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "pharmacy create successfully!",
            data: { pharmacy },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** list pharmacy*/
const listPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.listPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "pharmacy list successfully!",
            data: { pharmacy },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** delete pharmacy*/
const deletePharmacy = async (req, res) => {
    try {
        const id = req.params.Id
        const pharmacy = await pharmacyService.listPharmacy();
        if (!pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }
        await pharmacyService.deletePharmacy(id)

        res.status(200).json({
            success: true,
            message: "pharmacy delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports={createPharmacy,listPharmacy,deletePharmacy}