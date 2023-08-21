const Category = require('../models/category-schema');
const mongoose = require('mongoose');

const listCategories = async (req, res) => {
    const categories = await Category.find();

    if (!categories) {
        return res.status(404).json({error: "There is no categories yet"})
    }
    res.status(200).json(categories);
}

const categoryFinder = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such category"})
    }

    const category = await Category.findById(id);

    if (!category) {
        return res.status(404).json({error: "No such category"})
    }

    res.status(200).json(category);
}

const categoryCreator = async (req, res) => {
    const {title, slug, cover, description} = req.body;

    try{
        const category = await Category.create({title, slug, cover, description});
        res.status(200).json({message: "Category added successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

const categoryDeletor = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such category"})
    }

    try{
        const deleteCategory = await Category.findByIdAndRemove(id);
        res.status(200).json({message: "Category deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    categoryCreator,
    categoryFinder,
    categoryDeletor,
    listCategories
};