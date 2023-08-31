const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  customerId: {
    type: String,
  },
  productsList: [
    {
      product: { type: String },
      quantity: { type: Number, default: 1 },
    }
  ],
  paymentStatus: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true, collection: 'carts' });

module.exports = mongoose.model('Cart', cartSchema);
