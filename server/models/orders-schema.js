const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true, collection: "orders"});

module.exports = mongoose.model("Order", ordersSchema);