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
    const { id } = req.params;
    const cartProducts = await Cart.find({ customerId: id });
    if (cartProducts.length === 0) {
      return res.status(404).json({ status: "error", error: 'The cart has no products' });
    }
    const productsList = cartProducts.map(cart => cart.productsList);
    res.status(200).json(productsList);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};

const addToCart = async (req, res) => {
  try {
    // const product = req.body.prod.product;
    const cartH = await Cart.findOne({ customerId: req.params.id });
    // const item = cartH.productsList.find(c => c.product == product);
    if (!cartH) {
      return res.status(404).json({ status: "error", error: 'Cart not found' });
    }
    // if (item) {
    //   await Cart.findOneAndUpdate({"customerId": req.params.id, "productsList.product": product}, {
    //     "$set": {
    //       "productsList": {
    //         ...cartH.productsList,
    //         quantity: item.quantity + req.body.prod.quantity
    //       }
    //     }
    //   })
    // } else {
    await Cart.findOneAndUpdate({customerId: req.params.id}, {
        "$push": {
          "productsList": req.body.prod
        }
      })
// }

    res.status(200).json({status: "ok"});
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: 'Internal server error' });
  }
};

const removeFromCart = async (req, res) => {
  try {

    const cartH = await Cart.findOne({ customerId: req.params.id });

    if (!cartH) {
      return res.status(404).json({ status: "error", error: 'Cart not found' });
    }

    await Cart.findOneAndUpdate({customerId: req.params.id}, {
        "$pull": {
          "productsList": req.body.prod,
        }
      })

    res.status(200).json({ status: "ok" });
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
