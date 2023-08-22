const Product = require('../models/products-schema');
const mongoose = require('mongoose');

const listProducts = async (req, res) => {
    const products = await Product.find();

    if (!products) {
        return res.status(404).json({status: "error", error: "There is no products yet"})
    }
    res.status(200).json(products);
}

const productsFinder = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({status: "error", error: "No such product"})
    }

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({status: "error", error: "No such product"})
    }

    res.status(200).json(product);
}

const productsCreator = async (req, res) => {
    const {title, cover, description, category, price} = req.body;

    try{
        const product = await Product.create({title, cover, description, category, price});
        res.status(200).json({status: "ok"});
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while creating the product"})
    }
}

const productsDeletor = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such product"})
    }

    try{
        const deleteProduct = await Product.findByIdAndRemove(id);
        if (!deleteProduct) {
            return res.status(404).json({error: "No such product"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while deleting the product"})
    }
}

const productUpdater = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such product"})
    }

    try{
        const updateProduct = await Product.findOneAndUpdate(
            {_id: id},
            {...req.body}
        );
        if (!updateProduct) {
            return res.status(404).json({error: "No such product"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while updating the product"})
    }   
}

module.exports = {
    productsCreator,
    productsFinder,
    listProducts,
    productsDeletor,
    productUpdater
};