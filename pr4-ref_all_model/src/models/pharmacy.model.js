const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
    Medication: {
        type: String,
        trim: true
    },
    Prescription: {
        type: String,
        trim: true
    },
    Patient: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true,
        required: true
    },is_active: {
            type: Boolean,
            default: true,
        },
         bus : {
            type : mongoose.Types.ObjectId,
            ref:'bus'
        }

},
    {
        timestamps: true,
        versionKey: false
    });

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);
module.exports = Pharmacy;