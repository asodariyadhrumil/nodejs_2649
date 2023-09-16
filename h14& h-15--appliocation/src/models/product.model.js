const mongoose =require("mongoose");

const productSchema =new mongoose.Schema({
    product_name : {
     type: String,
     trim : true
    },
    product_description:{
        type :String,
        trim:true
    },
    product_price:{
        type :Number,

    },
    product_available:{
        type :String,
        trim:true
    },
    product_weight:{
        type :Number,
        trim:true
    },
    is_active:{
        type: Boolean,
        default: false
    },
    cart:{
        type: mongoose.Types.ObjectId,
        ref:"cart"
    }
},

{
    timestamps:true,
    versionKey:false
});

const product = mongoose.model("product", productSchema);
module.exports = product;