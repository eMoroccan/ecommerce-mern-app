const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, findCartProducts, createCart, getAll } = require('../controllers/cart-controller');

router.use(express.json());

router.get('/get-products/:id', findCartProducts)

router.get('/get-all/', getAll)

router.post('/create/:id', createCart);

router.patch('/add-to/:id', addToCart);

router.patch('/remove-from/:id', removeFromCart);

module.exports = router;
