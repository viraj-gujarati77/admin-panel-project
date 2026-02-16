const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    image: { type: String, required: true } // Stores the file path
});

module.exports = mongoose.model('Product', productSchema);
