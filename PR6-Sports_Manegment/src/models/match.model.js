const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
    {
        match_location: {
            type: String,
            trim: true
        },
        match_date: {
            type: Date,
            default: Date.now()
        },
        teams: [{
            type: mongoose.Types.ObjectId,
            ref: 'team'
        }],
        match_result:{
            type:String,
            trim:true
        },
        is_active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const match = mongoose.model("match" , matchSchema);
module.exports = match;