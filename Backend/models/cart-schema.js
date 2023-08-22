const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'products',
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        default: false
    }
    
}, {timestamps: true, collection: 'carts'});

module.exports = mongoose.model('Cart', cartSchema);