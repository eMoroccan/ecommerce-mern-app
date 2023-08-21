const Product = require('../models/products-schema');
const mongoose = require('mongoose');

const listProducts = async (req, res) => {
    const products = await Product.find();

    if (!products) {
        return res.status(404).json({error: "There is no products yet"})
    }
    res.status(200).json(products);
}

const productsFinder = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such product"})
    }

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({error: "No such product"})
    }

    res.status(200).json(product);
}

const productsCreator = async (req, res) => {
    const {title, cover, description, category, price} = req.body;

    try{
        const product = await Product.create({title, cover, description, category, price});
        res.status(200).json({message: "Product added successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

const productsDeletor = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such product"})
    }

    try{
        const deleteProduct = await Product.findByIdAndRemove(id);
        res.status(200).json({message: "Product deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    productsCreator,
    productsFinder,
    listProducts,
    productsDeletor
};