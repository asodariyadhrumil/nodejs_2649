const mongoose = require("mongoose");

const stationerySchema = new mongoose.Schema({
    stationery_name: {
        type: String,
        trim: true,
    },
    books: {
        type: String,
        trim: true,
        required: true
    },
    calender: {
        type: String,
        trim: true,
        required: true
    },
    pens: {
        type: String,
        trim: true,
        required: true
    },
    Pencils: {
        type: String,
        trim: true,
        required: true
    },
    is_active: {
        type: Boolean,
        default: true,
    },
    school: {
        type: mongoose.Types.ObjectId,
        ref: "school"
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

// const Stationary = mongoose.model("Stationery", stationerySchema);
// module.exports = Stationary;

const Stationery = mongoose.model("Stationery",stationerySchema);
module.exports=Stationery;
