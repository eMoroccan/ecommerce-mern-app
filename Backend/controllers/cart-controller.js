const Cart = require('../models/cart-schema');
const mongoose = require('mongoose');

const findCartProducts = async (req, res) => {
   try {
        const {id} = req.params;
        const carts = await Cart.find({userId: id}).populate('productId')
        res.status(200).json(carts)
      } catch (error) {
        console.log(error.message)
        return res.status(404).json({error: "No such category"});
      }
}

const addProductInCart = async (req, res) => {
    const {productId, count} = req.body
    try {
      const cart = await Cart.findOneAndUpdate(
        {productId},
        {productId, count, userId: req.user._id},
        {upsert: true},
      )
  
      res.status(200).json({status: 'ok'})
    } catch (error) {
      console.log(error.message)
      sendResponseError(500, `Error ${error}`, res)
    }
  }
  const removeProductFromCart = async (req, res) => {
    try {
      const {id} = req.params;
      await Cart.findByIdAndRemove(id)
      res.status(200).send({status: 'ok'})
    } catch (error) {
      console.log(error)
      sendResponseError(500, `Error ${error}`, res)
    }
  }

module.exports = {
    addProductInCart,
    removeProductFromCart,
    findCartProducts

};