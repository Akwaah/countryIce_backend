require('dotenv').config()

const express = require('express')

const mongoose =require('mongoose')

const dispenserSalesRoutes = require('./routes/dispenser/sales')
const dispenserProductionRoutes = require('./routes/dispenser/productionRoute')
const dispenserClientRoute = require('./routes/dispenser/clientRoute')
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
app.use('/api/dispenser/production', dispenserProductionRoutes)
app.use('/api/dispenser/client', dispenserClientRoute)

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
