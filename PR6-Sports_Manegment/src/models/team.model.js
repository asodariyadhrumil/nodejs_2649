const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        team_name: {
            type: String,
            trim: true
        },
        team_disc: {
            type: String,
            trim: true
        },
        team_players: {
            type: Number,
            trim: true
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        },
        coach: {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        },
        players: [{
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }],
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const team = mongoose.model("team" , teamSchema);
module.exports = team;