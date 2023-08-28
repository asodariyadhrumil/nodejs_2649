const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true 
    },
    last_name:{
        type:string,
        trim:true
    },
    email:{
        type: String,
        trim:true
    },
    password:{
        type:string,
    },
    is_active:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true,
    versionKey:false
}
);

const user = mongoose.model("user", userSchema);
module.exports= user;