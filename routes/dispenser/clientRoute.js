const express = require('express')
const {
   createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient,
} = require('../../controllers/dispenser/clientController')

// const DBSale = require('../../models/dispenser/salesModel')

const router = express.Router()

// GEt all Dispenser Sales
router.get('/', getClients)

// GET single dispenser sales
router.get('/:id', getClient)

// POST new dispenser sale
router.post('/', createClient)

// DELETE single dispenser sale
router.delete('/:id', deleteClient)

// UPDATE dispenser sale
router.patch('/:id', updateClient)


module.exports = router