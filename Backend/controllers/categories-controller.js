const Category = require('../models/category-schema');
const mongoose = require('mongoose');

const listCategories = async (req, res) => {
    const categories = await Category.find();

    if (!categories) {
        return res.status(404).json({status: "error", error: "There is no categories yet"})
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
        return res.status(404).json({status: "error", error: "No such category"})
    }

    res.status(200).json(category);
}

const categoryCreator = async (req, res) => {
    const {title, slug, cover, description} = req.body;

    try{
        const category = await Category.create({title, slug, cover, description});
        res.status(200).json({status: "ok"});
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while creating this category"})
    }
}

const categoryDeletor = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such category"})
    }

    try{
        const deleteCategory = await Category.findByIdAndRemove(id);
        if (!deleteCategory) {
            return res.status(404).json({status: "error", error: "No such category"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while deleting this category"})
    }
}

const categoryUpdater = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such category"})
    }

    try{
        const updateCategory = await Category.findOneAndUpdate(
            {_id: id},
            {...req.body}
        );
        if (!updateCategory) {
            return res.status(404).json({status: "error", error: "No such category"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while updating the category"})
    }
}

module.exports = {
    categoryCreator,
    categoryFinder,
    categoryDeletor,
    listCategories,
    categoryUpdater
};