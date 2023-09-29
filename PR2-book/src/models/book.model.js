const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        book_name :{
            type: String,
            trime :true,
        },
        book_price :{
            type: Number,
            trime :true,
        },
        book_author:{
            type: String,
            trime :true,
        },
        is_active:{
            type:Boolean,
            default: true,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
);
 const book =  module.model("book",userSchema);
 module.exports = book;