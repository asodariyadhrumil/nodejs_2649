const mongoose = require("mongoose")
const travelSchema = new mongoose.Schema(
    {
        travel_name: {
            type: String,
            trim: true,
        },
        travel_purposes: {
            type: String,
            trim: true,
        },
        travel_planning: {
            type:String,
            trim: true,
        },
        travel_resources: {
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

const Travel = mongoose.model("Travel", travelSchema)
module.exports = Travel;