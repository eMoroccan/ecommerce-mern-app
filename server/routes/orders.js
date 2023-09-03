const express = require("express");
const router = express.Router();
const {createOrder, removeOrder, updateOrder, getOrder, getOrders} = require("./../controllers/orders-controller");

router.use(express.json());

router.get('/get-all', getOrders);

router.get('/get-id/:id', getOrder);

router.post('/create', createOrder);

router.delete('/remove/:id', removeOrder);

router.patch('/update/:id', updateOrder);

module.exports = router;