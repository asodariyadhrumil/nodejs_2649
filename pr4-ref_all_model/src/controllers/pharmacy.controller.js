const { pharmacyService } = require('../services');

/* Create pharmacy */
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.createPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "pharmacy created successfully!",
            data:  pharmacy ,
          });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get pharmacy list */
const getPharmacyList = async (req, res) => {
    try {

      const getList = await pharmacyService.getPharmacyList(req,res);

      res.status(200).json({
        success: true,
        message: "Get pharmacy list successfully!",
        data: getList,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** Delete pharmacy */
const deletePharmacy = async (req, res) => {
    try {
      const pharmacyId = req.params.pharmacyId;
      if (!pharmacyId) {
        throw new Error("pharmacy not found!");
      }
  
      await pharmacyService.deletePharmacy(pharmacyId);
  
      res.status(200).json({
        success: true,
        message: "pharmacy deleted successfully!",
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  };

  /** pharmacy details update by id */
const pharmacyUpdate = async (req, res) => {
  try {
    const pharmacyId = req.params.pharmacyId;
    const pharmacyExists = await pharmacyService.getPharmacyById(pharmacyId);
    if (!pharmacyExists) {
      throw new Error("pharmacy not found!");
    }

    await pharmacyService.pharmacyUpdate(pharmacyId, req.body);

    res.status(200).json({
      success: true,
      message: "pharmacy details updated successfully."
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    createPharmacy,
    getPharmacyList,
    deletePharmacy,
    pharmacyUpdate
}