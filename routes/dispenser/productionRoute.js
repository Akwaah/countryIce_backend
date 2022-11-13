const express = require('express')
const {
   createProduction,
    getProductions,
    getProduction,
    deleteProduction,
    updateProduction,
    getSearchProductions
} = require('../../controllers/dispenser/productionController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getProductions)

// GET single dispenser sales
router.get('/:id', getProduction)

// POST new dispenser sale
router.post('/', createProduction)

// DELETE single dispenser sale
router.delete('/:id', deleteProduction)

// UPDATE dispenser sale
router.patch('/:id', updateProduction)

// UPDATE dispenser sale
router.get('/', getSearchProductions)


module.exports = router