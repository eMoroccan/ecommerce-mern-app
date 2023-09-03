require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');
const usersRoutes = require('./routes/users');
const cartsRoutes = require('./routes/carts');
const ordersRoutes = require('./routes/orders');




app.use((req, res, next) => {
    console.log("Successful request:", req.path, req.method);
    next();
})

// connect to db
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => {
        console.log("The server has started on the port:", process.env.PORT);
    })
}).catch(error => {
    console.log(error)
});

app.use('/api/products', productsRoutes);
app.use('/api/carts', cartsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/orders', ordersRoutes);

