const express = require('express');
const router = express.Router();
const {categoryCreator, categoryFinder, categoryDeletor, listCategories} = require('./../controllers/categories-controller');

router.use(express.json());

router.get('/get-all', listCategories);

router.get('/get-id/:id', categoryFinder)

router.post('/create', categoryCreator);

router.delete('/delete:id', categoryDeletor);

module.exports = router;