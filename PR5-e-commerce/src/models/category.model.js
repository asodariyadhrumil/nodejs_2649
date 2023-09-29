const mongoose =require("mongoose");

const categorySchema =new mongoose.Schema({
    category_name : {
     type: String,
     trim : true
    },
    cetegory_description:{
        type :String,
        trim:true
    },
    is_active:{
        type: Boolean,
        default: false
    },
    product:{
        type: mongoose.Types.ObjectId,
        ref:"product"
    },
},
{
    timestamps:true,
    versionKey:false
});

const category = mongoose.model("category", categorySchema);
module.exports = category;