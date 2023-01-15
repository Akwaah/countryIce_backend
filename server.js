require('dotenv').config()
const cors = require("cors");

const express = require('express')

const mongoose =require('mongoose')

// Dispenser
const dispenserSalesRoutes = require('./routes/dispenser/sales')
const dispenserProductionRoutes = require('./routes/dispenser/productionRoute')
const dispenserClientRoute = require('./routes/dispenser/clientRoute')
const dispenserExpenseRoute = require('./routes/dispenser/expenseRoute')
const staffRoute = require('./routes/general/staffRoute')

// Sachet
const sachetSalesRoutes = require('./routes/sachet/salesRoute')

// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors());
app.use(express.json())




// app.get('*', async function (request, reply) {
//     return reply.sendFile('index.html')
//   })

// ROUTES
// Dispenser
app.use('/api/dispenser/sales/', dispenserSalesRoutes)
app.use('/api/dispenser/production', dispenserProductionRoutes)
app.use('/api/dispenser/client', dispenserClientRoute)
app.use('/api/dispenser/expense', dispenserExpenseRoute)

// Sachet
app.use('/api/sachet/sales', sachetSalesRoutes)
app.use('/api/staff', staffRoute)


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
