const User = require('../models/user-schema');
const mongoose = require('mongoose');

const listUsers = async (req, res) => {
    const users = await User.find();

    if (!users) {
        return res.status(404).json({status: "error", error: "There is no users yet"})
    }
    res.status(200).json(users);
}

const userFinder = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({status: "error", error: "No such user"})
    }

    res.status(200).json(user);
}

const userCreator = async (req, res) => {
    const {username, name, email, password} = req.body;

    try{
        const user = await User.create({username, name, email, password});
        res.status(200).json({status: "ok"});
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while creating this user"})
    }
}

const userDeletor = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try{
        const deleteUser = await User.findByIdAndRemove(id);
        if (!deleteUser) {
            return res.status(404).json({status: "error", error: "No such user"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while deleting this user"})
    }
}

const userUpdater = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such user"})
    }

    try{
        const updateUser = await User.findOneAndUpdate(
            {_id: id},
            {...req.body}
        );
        if (!updateUser) {
            return res.status(404).json({status: "error", error: "No such user"})
        } else {
            res.status(200).json({status: "ok"});
        }
    } catch (error) {
        console.log(error.message);
        res.json({status: "error", error: "There was an error while updating the user"})
    }
}

module.exports = {
    listUsers,
    userCreator,
    userFinder,
    userDeletor,
    userUpdater 
};