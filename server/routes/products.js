const express = require('express');
const router = express.Router();
const {productsCreator, productsFinder, productsDeletor, listProducts, productUpdater} = require('./../controllers/products-controller');
const requireAuth = require('../middleware/auth.js');

router.use(express.json());

router.get('/get-all', listProducts);

router.get('/get-id/:id', productsFinder)

router.post('/create', requireAuth, productsCreator);

router.delete('/delete/:id', requireAuth, productsDeletor);

router.patch('/update/:id', requireAuth, productUpdater);

module.exports = router;