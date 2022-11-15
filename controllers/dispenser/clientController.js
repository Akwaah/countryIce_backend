const clientModel = require('../../models/dispenser/clientModel')
const mongoose = require('mongoose')


// get all clients
const getClients = async (req, res) => {
    const Clients = await clientModel.find().sort({ createdAt: -1 })
    res.status(200).json(Clients)
}

// get single client
const getClient = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Client'})
    }
    
    const Clients = await clientModel.findById(id)

    if (!Clients) {
        return res.status(404).json({error: 'No such Client'})
    }

    res.status(200).json(Clients)
}

// create Client
const createClient = async (req, res) => {
     const {
            contactPerson,
            date,
            organisation,
            location,
            phoneNumber
} = req.body
    // ClientsData = req.body

    // add doc to db
    try {
        const Client = await clientModel.create({
            contactPerson,
            date,
            organisation,
            location,
            phoneNumber
        })
        // console.log(ClientsData);
        res.status(200).json(Client)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete Clients
const deleteClient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Clients'})
    }
    
    const Clients = await clientModel.findOneAndDelete({_id: id})

    if (!Clients) {
        return res.status(404).json({error: 'No such Client'})
    }

    res.status(200).json(Clients)
}

// update Clients
const updateClient = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Clients'})
    }
    
    const Clients = await clientModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!Clients) {
        return res.status(404).json({ error: 'No such Client' })
    }

    res.status(200).json(Clients)
}

module.exports = {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}