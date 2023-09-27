const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema(
    {
        tournament_name: {
            type: String,
            required: true
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        },
        teams: [{
            type: mongoose.Types.ObjectId,
            ref: 'team'
        }],
        start_date: {
            type: Date,
            required: true
        },
        end_date: {
            type: Date,
            required: true
        },
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


const tournament = mongoose.model('tournament', tournamentSchema);


module.exports = { tournament };