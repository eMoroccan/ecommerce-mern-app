const Order = require("./../models/orders-schema");

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        if (!orders) {
            return res.status(404).json({status: "error", error: "There is no orders yet."});
        }
        res.status(200).json(orders);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while fetching the  orders."})
    }
}

const getOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({status: "error", error: "No such order."});
        }
        res.status(200).json(order);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while fetching this order."})
    }
}

const createOrder = async (req, res) => {
    const {customer, total} = req.body;

    try {
        const order = await Order.create({customer, total});

        res.status(200).json({status: "ok"});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while making this order, please try in a few minutes"});
    }
    
}

const removeOrder = async (req, res) => {
    const {id} = req.params;
    
    try {
        const deleteOrder = await Order.findByIdAndRemove(id);
        if (!deleteOrder) {
            return res.status(404).json({status: "error", error: "No such order"});
        }
        res.status(200).json({status: "ok"});

    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while removing this order."});
    }
}

const updateOrder = async (req, res) => {
    const {id} = req.params;
    const {status} = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) {
            return res.status(404).json({status: "error", error: "No such order"});
        }
        order.status = status;
        await order.save();
        res.status(200).json({status: "ok"});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while updating this order."});
    }
}

module.exports = {
    createOrder,
    removeOrder,
    updateOrder,
    getOrders,
    getOrder
}