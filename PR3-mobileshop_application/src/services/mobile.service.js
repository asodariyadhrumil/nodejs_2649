const   mobile = require("../models");

// Create mobile
const createMobile = async (reqBody) => {
    return mobile.create(reqBody);
};

// get mobile list
const getMobileList = async (req, res) => {
    return mobile.find();
};

// delete mobile
const deleteMobile = async (mobileId) => {
    return mobile.findByIdAndDelete(mobileId);
};

// Get mobile details by id
const getMobileById = async (mobileId) => {
    return mobile.findById(mobileId);
};

// update mobile details by id
const updateMobile = async (mobileId, updateBody) => {
    return mobile.findByIdAndUpdate(mobileId, { $det: updateBody });
};

// update mobile status by id
const updateMobileStatus = async (mobileId, updateBody) => {
    return mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
};

//  Get mobile status
const getMobileStatus = async (mobileId, { is_active }) => {
    const mobileStatus = mobile.findOne(mobileId, { is_active });

    if (mobileStatus) {
        return mobile.findByIdAndUpdate(mobileId, { $set: { is_active: false } });
    }
    else {
        return mobile.findByIdAndUpdate(mobileId, { $set: { is_active: true } });
    }
};

module.exports = {
    createMobile,
    getMobileList,
    deleteMobile,
    getMobileById,
    updateMobile,
    updateMobileStatus,
    getMobileStatus
}
