const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    customerId: {
      type: String,
    },
    count: {
        type: Number,
        default: 0,
        required: true
    },
    productsList: [String],
    paymentStatus: {
        type: Boolean,
        default: false
    }

}, {timestamps: true, collection: 'carts'});

module.exports = mongoose.model('Cart', cartSchema);
