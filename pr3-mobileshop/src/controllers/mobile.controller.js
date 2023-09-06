const { mobile } = require("../models");
const mobileService = require("../services");

/* Create mobile */
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.createMobile(reqBody);
        if (!mobile) {
            throw new Error("Something went wrong, please try again or later..");
        }

        res.status(200).json({
            success: true,
            message: "mobile created successfully..",
            data: mobile
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* get mobile list*/
const getMobileList = async (req, res) => {
    try {
        const getList = await mobileService.getMobileList(req, res);

        res.status(200).json({
            success: true,
            message: "Get mobile list successfully..",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* delete mobile */
const deleteMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        if (!mobileId) {
            throw new Error("mobile not found");
        }

        await mobileService.deleteMobile(mobileId);
        res.status(200).json({
            success: true,
            message: "mobile deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/** Get mobile details by id */
const getMobileById = async (req, res) => {
    try {
        const getDetails = await mobileService.getMobileById(req.params.mobileId);
        if (!getDetails) {
            throw new Error("mobile not found!");
        }

        res.status(200).json({
            success: true,
            message: "mobile details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** mobile details update by id */
const updateMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobileExists = await mobileService.getMobileById(mobileId);
        if (!mobileExists) {
            throw new Error("mobile not found!");
        }

        await mobileService.updateMobile(mobileId, req.body);

        res.status(200).json({
            success: true,
            message: "mobile details updated successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};


/** update mobile status by id */
const updateMobileStatus = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        if (!mobileId) {
            throw new Error("Mobile not found");
        };

        const mobileStatus = await mobileService.getMobileStatus(mobileId, { is_active });
        await mobileService.updateMobileStatus(mobileId, mobileStatus.is_active);

        res.status(200).json({
            success: true,
            message: "mobile status updated successfully!"
        });

    } catch (error) {
        res.status(400).json({
             success: false,
              message: error.message
            });
    }
}


module.exports = {
    createMobile,
    getMobileList,
    deleteMobile,
    getMobileById,
    updateMobile,
    updateMobileStatus
}
