const productionModel = require('../../models/dispenser/productionModel')
const mongoose = require('mongoose')

// get all Productions
const getProductions = async (req, res) => {
    const query = { deliveryPerson: { $search: `${req.query.search}` } }
    const Productions = await productionModel.find({ query }).sort({ createdAt: -1 })
    console.log(req.query.search);
    
    res.status(200).json(Productions)
}

// get single Productions
const getProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findById(id)

    if (!Productions) {
        return res.status(404).json({error: 'No such Production'})
    }

    res.status(200).json(Productions)
}

// create a Production
const createProduction = async (req, res) => {
     const {
            // basic Details
            personel,
            date,
            emptyBottle,
            quantityProduced
} = req.body
    // ProductionsData = req.body

    // add doc to db
    try {
        const production = await productionModel.create({
            personel,
            date,
            emptyBottle,
            quantityProduced
        })
        // console.log(ProductionsData);
        res.status(200).json(production)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete Productions
const deleteProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findOneAndDelete({_id: id})

    if (!Productions) {
        return res.status(404).json({error: 'No such Production'})
    }

    res.status(200).json(Productions)
}

// update Productions
const updateProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!Productions) {
        return res.status(404).json({ error: 'No such Production' })
    }

    res.status(200).json(Productions)
}

const getSearchProductions = async (req, res) => {
    const query = { $text: { $search: req.query.search } }
    const searchResult = await productionModel.find(Enoch)
    console.log('this is a text', searchResult);
    res.status(200).json(searchResult)
}





module.exports = {
    createProduction,
    getProductions,
    getProduction,
    deleteProduction,
    updateProduction,
    getSearchProductions
}