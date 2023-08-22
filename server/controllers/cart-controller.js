const Cart = require('../models/cart-schema');
const mongoose = require('mongoose');

const createCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const existingCart = await Cart.findOne({ userId });

    if (existingCart) {
      return res.status(400).json({ status: "error", error: 'Cart already exists for this user' });
    }

    const cart = new Cart({
      _id: userId,
      userId,
      count: 0
    });

    await cart.save();

    res.status(200).json({status: "ok"}, cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};

const findCartProducts = async (req, res) => {
   try {
        const {id} = req.params;
        const cartProducts = await Cart.find({userId: id}).populate('productId')
        if (!cartProducts) {
          return res.status(404).json({ status: "error", error: 'The cart has no products' });
        }
        res.status(200).json(cartProducts)
      } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: "error", error: 'Internal server error' });
      }
}

const addToCart = async (req, res) => {
  try {
    const { userId, productId, count } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ status: "error", error: 'Cart not found' });
    }

    for (let i = 0; i < count; i++) {
      cart.productsList.push(productId);  
    }
    cart.count += count;

    await cart.save();

    res.status(200).json({ status: "ok" }, cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ status: "error", error: 'Cart not found' });
    }

    cart.productsList.pull(productId);  
    
    cart.count -= 1;

    if (cart.count < 0) {
      cart.count = 0;
    }

    await cart.save();

    res.status(200).json({ status: "ok" }, cart);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};


module.exports = {
    addToCart,
    removeFromCart,
    findCartProducts,
    createCart
  };