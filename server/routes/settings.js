const express = require('express');
const router = express.Router();
const {createSettings, generalUpdate, faviconUpdate, getSettings} = require('./../controllers/settings-controller');

router.use(express.json());

router.post('/create', createSettings);
router.patch('/general-update', generalUpdate);
router.patch('/favicon-update', faviconUpdate);
router.get('/get', getSettings);

module.exports = router;
