const express = require('express')

const {
    createSales,
    getSales,
    // getSale,
    deleteSale,
    updateSale,
    // getMonthlyTotalSales,
    getTotalSales
} = require('../../controllers/sachet/salesController')

const router = express.Router()

// GET all Dispenser Sales
router.get('/', getSales)

// GET total sales
router.get('/t', getTotalSales)

// DELETE single dispenser sale
router.delete('/d/:id', deleteSale)

// POST new dispenser sale
router.post('/', createSales)

// UPDATE dispenser sale
router.patch('/u/:id', updateSale)

module.exports = router