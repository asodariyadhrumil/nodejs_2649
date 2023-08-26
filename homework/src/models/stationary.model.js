const mongoose = require("mongoose")

const stationarySchema = new mongoose.Schema(
    {
        store_name: {
            type: String,
            trim: true,
        },
        store_address: {
            type: String,
            trim: true,
        },
        email : {
            type: String,
            trim: true
        },
        customer_name: {
            type: String,
            trim: true
        },
        product_name: {
            type: String,
            trim: true
        },
        product_price: {
            type: Number,
            default:0,
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

const stationary = mongoose.model("stationary", stationarySchema);
module.exports = stationary;