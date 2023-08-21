const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name :{
            type: String,
            trime :true,
        },
       last_name :{
            type: String,
            trime :true,
        },
        email:{
            type: String,
            trime :true,
        },
        password :{
            type: String,
        },
        is_active:{
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
);
 const user =  mongoose.model("user",userSchema);
 module.exports = user;