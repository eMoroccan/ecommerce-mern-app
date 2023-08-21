require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const productsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');


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
app.use('/api/categories', categoriesRoutes);

