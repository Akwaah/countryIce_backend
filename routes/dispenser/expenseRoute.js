const express = require('express')
const {
   createexpense,
    getexpenses,
    getexpense,
    deleteexpense,
    updateexpense,
    getSearchexpenses
} = require('../../controllers/dispenser/expenseController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getexpenses)

// GET single dispenser sales
router.get('/:id', getexpense)

// POST new dispenser sale
router.post('/', createexpense)

// DELETE single dispenser sale
router.delete('/:id', deleteexpense)

// UPDATE dispenser sale
router.patch('/:id', updateexpense)

// UPDATE dispenser sale
router.get('/', getSearchexpenses)


module.exports = router