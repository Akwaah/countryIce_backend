require('dotenv').config()

const express = require('express')

const mongoose =require('mongoose')

const dispenserSalesRoutes = require('./routes/dispenser/sales')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/dispenser/sales', dispenserSalesRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to db and Listening to port 4000');
        })
    })
    .catch((error) => {
    console.log(error);
})
