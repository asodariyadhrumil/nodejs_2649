const mongoose = require("mongoose")

const pharmacySchema = new mongoose.Schema(
    {
        customers_name : {
            type: String,
            trim: true,
        },
        customers_phone: {
            type: Number,
        },
        inventory: {
            type: String,
            trim: true,
        },
        orderitems: {
            type: String,
            trim: true,
        },
        sales: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const pharmacy= mongoose.model("pharmacy",pharmacySchema);
module.exports = pharmacy;