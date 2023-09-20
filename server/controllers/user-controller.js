require('dotenv').config();
const User = require('../models/user-schema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cart = require('../models/cart-schema');

const listUsers = async (req, res) => {
    const users = await User.find({admin: false});

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
    const {username, name, adresse, email, nonHashedPassword} = req.body;
    if (!username || typeof username !== "string") {
      return res.json({status: "error", error: "Invalid username."})
    }
    if (!nonHashedPassword) {
      return res.json({status: "error", error: "Password length require at least 6 characters."})
    }
    try {
        const password = await bcrypt.hash(nonHashedPassword, 10);

        const user = await User.create({username, name, adresse, email, password});

        const cart = new Cart({
            customerId: user._id,
          });
      
        await cart.save();
        res.status(200).json({status: "ok"});
    } catch (error) {
        if (error.code === 11000) {
          return res.json({status: "error", error: "Username already in use."})
        }
        console.log(error.message);
        res.json({status: "error", error: "There was an error while creating this user"});
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

const setAdmin = async (req, res) => {
    const {id} = req.params;

    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({status: "error", error: "No such user"});
    }
    try {
        user.admin = true;
        await user.save();
        res.status(200).json({status: "ok"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({status: "error", error: "There was an error while updating the use"});
    }
}

const logging = async (req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username: username}).lean();
  if (!user) {
    return res.status(404).json({status: "error", error: "No such user"});
  }
  try {
    if (!await bcrypt.compare(password, user.password)) {
      return res.json({status: "error", error: "Password incorrect"});
    }
    const token = jwt.sign({
      id: user._id,
      username: user.username,
      admin: user.admin
    }, process.env.ACCESS_TOKEN_SECRET);
    res.json({status: "ok", data: token, admin: user.admin});

  } catch(error) {
    console.log(error.message);
    res.status(500).json({status: "error", error: "There was an error while logging."});
  }
}

module.exports = {
    listUsers,
    userCreator,
    userFinder,
    userDeletor,
    userUpdater,
    setAdmin,
    logging
};
