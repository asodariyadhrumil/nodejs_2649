const mongoose = require("mongoose")
const productSchema = new mongoose.Schema(
    {
        product_name:{
            type :String,
            trim : true,
        },
        product_price:{
            type :Number,
            trim : true,
        },
        product_discount:{
            type :Number,
            trim : true,
        },
        product_discription:{
            type :String,
            trim : true,
        },
        product_image:{
            type :String,
            trim : true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const  product =mongoose.model("product",productSchema);
module.exports = product;