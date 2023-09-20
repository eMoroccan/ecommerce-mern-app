const express = require('express');
const router = express.Router();
const { addToCart, removeFromCart, findCartProducts, createCart, getAll } = require('../controllers/cart-controller');
const requireAuth = require('../middleware/auth.js');

router.use(express.json());

router.get('/get-products/:id', findCartProducts)

router.get('/get-all/', requireAuth, getAll)

router.post('/create/:id',requireAuth , createCart);

router.patch('/add-to/:id', addToCart);

router.patch('/remove-from/:id', removeFromCart);

module.exports = router;
