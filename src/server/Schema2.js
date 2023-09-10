const mongoose = require("mongoose");

const productSchema2 = new mongoose.Schema({
    id : String,
    name : String,
    category : String,
    brand: String,
    discount : String,
    price : String,
    path: String
});

module.exports = mongoose.model("Products", productSchema2);