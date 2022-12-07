const express = require('express')
const {
   createProduction,
    getProductions,
    getProduction,
    deleteProduction,
    updateProduction,
    getMonthlyTotalProduction,
    getTotalProduction
} = require('../../controllers/dispenser/productionController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getProductions)

// GET single dispenser sales
router.get('/s/:id', getProduction)

// POST new dispenser sale
router.post('/', createProduction)

// DELETE single dispenser sale
router.delete('/d/:id', deleteProduction)

// UPDATE dispenser sale
router.patch('/u/:id', updateProduction)

// UPDATE dispenser sale
router.get('/mt/monthly-totals/', getMonthlyTotalProduction)

router.get('/t', getTotalProduction)

module.exports = router