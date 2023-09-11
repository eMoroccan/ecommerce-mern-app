const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    sitename: {
        type: String,
    },
    niche: {
        type: String,
    },
    description: {
        type: String,
    },
    favicon: {
        type: String,
    },
    currency: {
        type: String,
        default: "$"
    },
    _id: String
}, {collection: "settings"});

module.exports = mongoose.model('Settings', settingsSchema);
