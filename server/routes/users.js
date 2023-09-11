const express = require('express');
const router = express.Router();
const {listUsers, userCreator, userFinder, userDeletor, userUpdater, setAdmin, logging } = require('./../controllers/user-controller');

router.use(express.json());

router.get('/get-all', listUsers);

router.get('/get-id/:id', userFinder)

router.post('/create', userCreator);

router.delete('/delete/:id', userDeletor);

router.patch('/update/:id', userUpdater);

router.patch('/set-admin/:id', setAdmin);

router.post('/login', logging);

module.exports = router;
