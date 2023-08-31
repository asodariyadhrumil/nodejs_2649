const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
    {
        mobile_name:{
            type:String,
            trim:true
        },
        mobile_company:{
            type:String,
            trim:true
        },
        mobile_info:{
            type:String,
            trim:true
        },
        mobile_price:{
            type:number,
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

const mobile= mongoose.model("mobile",mobileSchema);
module.exports = mobile;
