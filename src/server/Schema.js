
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id : String,
    name : String,
    category : String,
    brand: String,
    discount : String,
    price : String,
    path: String
});

module.exports = mongoose.model("UpProducts", productSchema);