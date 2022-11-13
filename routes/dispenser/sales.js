const express = require('express')
const {
    createSales,
    getSales,
    getSale,
    deleteSale,
    updateSale,
    getSearchSales
} = require('../../controllers/dispenser/salesController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getSales)

// GET single dispenser sales
router.get('/:id', getSale)

// POST new dispenser sale
router.post('/', createSales)

// DELETE single dispenser sale
router.delete('/:id', deleteSale)

// UPDATE dispenser sale
router.patch('/:id', updateSale)

// UPDATE dispenser sale
router.get('/', getSearchSales)


module.exports = router