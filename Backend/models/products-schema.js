const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Products', productsSchema);