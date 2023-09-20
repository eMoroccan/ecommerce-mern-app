const jwt = require('jsonwebtoken');
const User = require('../models/user-schema');

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ status: "error", error: "Auth token required" });
    }

    const token = authorization && authorization.split(' ')[1];
    if (token === process.env.ACCESS_TOKEN_SECRET) {
        return next();
    } else {
        try {
            const { id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            const user = await User.findOne({ id }).select('_id admin');

            if (!user) {
                return res.status(401).json({ error: "User not found" });
            }

            if (!user.admin) {
                return res.status(403).json({ error: "User is not an admin" });
            }

            req.user = user;
            next();
        } catch (error) {
            console.log(error.message);
            res.status(401).json({ error: "Request not authorized" });
        }
    }
};

module.exports = requireAuth