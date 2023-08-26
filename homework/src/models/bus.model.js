const mongoose = require("mongoose")
const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_route: {
            type: String,
            trim: true,
        },
        bus_stop: {
            type: String,
            trim: true,
        },
        bus_ticket: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const Bus = mongoose.model("bus", busSchema)
module.exports = Bus;