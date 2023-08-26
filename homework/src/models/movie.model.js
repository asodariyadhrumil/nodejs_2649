const mongoose = require("mongoose")

const movieShema = new mongoose.Schema(
    {
        Movies_name: {
            type: String,
            trim: true,
        },
        Actors_name: {
            type: String,
            trim: true,
        },
        Directors_name: {
            type: String,
            trim: true,
        },
        Reviews: {
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
const movie =mongoose.model("movie",movieShema);
module.exports = movie;