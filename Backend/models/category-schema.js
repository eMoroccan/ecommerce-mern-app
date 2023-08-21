const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, {timestamps: true});

module.exports = mongoose.model('Categories', categorySchema);