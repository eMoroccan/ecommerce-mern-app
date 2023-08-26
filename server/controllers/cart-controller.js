const Cart = require('../models/cart-schema');
const mongoose = require('mongoose');

const createCart = async (req, res) => {
  try {
    const { id } = req.params;

    const existingCart = await Cart.findOne({ customerId: id });

    if (existingCart) {
      return res.status(400).json({ status: "error", error: 'Cart already exists for this user' });
    }

    const cart = new Cart({
      customerId: id,
      count: 0
    });

    await cart.save();

    res.status(200).json({status: "ok"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
      } catch(error) {
        console.log(error);
        res.status(500).json({ status: "error", error: 'Internal server error' });
      }
}

const findCartProducts = async (req, res) => {
   try {
        const {id} = req.params;
        const cartProducts = await Cart.find({customerId: id});
        if (!cartProducts) {
          return res.status(404).json({ status: "error", error: 'The cart has no products' });
        }
        res.status(200).json(cartProducts.productsList)
      } catch (error) {
        console.log(error.message)
        res.status(500).json({ status: "error", error: 'Internal server error' });
      }
}

const addToCart = async (req, res) => {
  try {
    const { prodId, count } = req.body;
    const {id} = req.params;

    const countN = parseInt(req.body.count, 10);

    const cartH = await Cart.findOne({ customerId: id });

    if (!cartH) {
      return res.status(404).json({ status: "error", error: 'Cart not found' });
    }



  cartH.productsList.push(prodId);
  cartH.count += 1;



    await cartH.save();

    res.status(200).json(cartH);
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
    createCart,
    getAll
  };
