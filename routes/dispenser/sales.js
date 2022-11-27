const express = require('express')
const {
    createSales,
    getSales,
    getSale,
    deleteSale,
    updateSale,
    getMonthlyTotalSales,
    getTotalSales
} = require('../../controllers/dispenser/salesController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getSales)

// GET single dispenser sales
router.get('/s/:id', getSale)

// POST new dispenser sale
router.post('/', createSales)

// DELETE single dispenser sale
router.delete('/d/:id', deleteSale)

// UPDATE dispenser sale
router.patch('/u/:id', updateSale)

// UPDATE dispenser sale
router.get('/mt/monthly-totals/', getMonthlyTotalSales)

router.all('/t', getTotalSales)


module.exports = router