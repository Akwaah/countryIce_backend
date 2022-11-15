const express = require('express')
const {
   createstaff,
    getstaffs,
    getstaff,
    deletestaff,
    updatestaff,
    getSearchstaffs
} = require('../../controllers/general/staffController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getstaffs)

// GET single dispenser sales
router.get('/:id', getstaff)

// POST new dispenser sale
router.post('/', createstaff)

// DELETE single dispenser sale
router.delete('/:id', deletestaff)

// UPDATE dispenser sale
router.patch('/:id', updatestaff)

// UPDATE dispenser sale
router.get('/', getSearchstaffs)


module.exports = router