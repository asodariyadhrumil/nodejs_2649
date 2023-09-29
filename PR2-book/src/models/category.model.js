const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type : string,
            trim : true,
        },
        
            category_desc: {
                type : string,
                trim: true,
            },
           is_active: {
                type : Boolean,
               default: true
            }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
 const category = mongoose.model("category",categorySchema)
  module.exports = category;