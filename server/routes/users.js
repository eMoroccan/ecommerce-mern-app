const express = require('express');
const router = express.Router();
const {listUsers, userCreator, userFinder, userDeletor, userUpdater, setAdmin, logging } = require('./../controllers/user-controller');
const requireAuth = require('../middleware/auth.js');

router.use(express.json());

router.get('/get-all', requireAuth, listUsers);

router.get('/get-id/:id', requireAuth, userFinder)

router.post('/create', requireAuth, userCreator);

router.delete('/delete/:id', requireAuth, userDeletor);

router.patch('/update/:id', requireAuth, userUpdater);

router.patch('/set-admin/:id', requireAuth, setAdmin);

router.post('/login', logging);

module.exports = router;
