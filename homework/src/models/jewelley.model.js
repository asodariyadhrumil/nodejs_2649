const mongoose = require("mongoose")

const jewellerySchema = new mongoose.Schema(
    {
        jewellery_types : {
            type: String,
            trim: true,
        },
        jewellery_materials: {
            type: Number,
            trim: true,
        },
        jewellery_styles: {
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

const jewellery= mongoose.model("jewellery",jewellerySchema);
module.exports = jewellery;