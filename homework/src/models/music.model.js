const mongoose = require("mongoose")

const musicShema = new mongoose.Schema(
    {
        Artists_name: {
            type: String,
            trim: true,
        },
        Songs_name: {
            type: String,
            trim: true,
        },
        Songs_duration: {
            type: String,
            trim: true,
        },
        Playlists: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)
const music =mongoose.model("music",musicShema);
module.exports = music;