const mongoose = require("mongoose");
const config = require("../config/config");

const bookSchema = new mongoose.Schema({
    Date: {
        type: String,
        trim: true
    },
    Headline: {
        type: String,
        trim: true
    },
    Image: {
        type: String,
    },
  
    Desc: {
        type: String,
        trim: true
    },
    countryOfOrigin: {
        type: String,
        trim: true
    },
    Author_Name: {
        type: String,
        trim: true
    },
    publisher: {
        type: String,
        trim: true
    },
    Position : {
        type: String,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.Image) {
                    data.Image = `${config.base_url}images/${data.Image}`;
                }
            },
        },
    });

    const Book = mongoose.model("Book",bookSchema);
    module.exports=Book;