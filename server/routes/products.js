const express = require('express');
const router = express.Router();
const {productsCreator, productsFinder, productsDeletor, listProducts, productUpdater} = require('./../controllers/products-controller');

router.use(express.json());

router.get('/get-all', listProducts);

router.get('/get-id/:id', productsFinder)

router.post('/create', productsCreator);

router.delete('/delete/:id', productsDeletor);

router.patch('/update/:id', productUpdater);

module.exports = router;