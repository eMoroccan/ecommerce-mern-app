const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, findCartProducts, createCart } = require('../controllers/cart-controller');

router.use(express.json());

router.get('/get-products/:id', findCartProducts)

router.post('/create', createCart);

router.delete('/add-to/:id', addToCart);

router.patch('/remove-from/:id', removeFromCart);

module.exports = router;