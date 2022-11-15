const expenseModel = require('../../models/dispenser/expenseModel')
const mongoose = require('mongoose')

// get all expenses
const getexpenses = async (req, res) => {
    const query = { deliveryPerson: { $search: `${req.query.search}` } }
    const expenses = await expenseModel.find({ query }).sort({ createdAt: -1 })
    console.log(req.query.search);
    
    res.status(200).json(expenses)
}

// get single expenses
const getexpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such expenses'})
    }
    
    const expenses = await expenseModel.findById(id)

    if (!expenses) {
        return res.status(404).json({error: 'No such expense'})
    }

    res.status(200).json(expenses)
}

// create a expense
const createexpense = async (req, res) => {
     const {
            // basic Details
            staffName,
            date,
            expenses
} = req.body
    // expensesData = req.body

    // add doc to db
    try {
        const expense = await expenseModel.create({
            staffName,
            date,
            expenses
        })
        // console.log(expensesData);
        res.status(200).json(expense)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete expenses
const deleteexpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such expenses'})
    }
    
    const expenses = await expenseModel.findOneAndDelete({_id: id})

    if (!expenses) {
        return res.status(404).json({error: 'No such expense'})
    }

    res.status(200).json(expenses)
}

// update expenses
const updateexpense = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such expenses'})
    }
    
    const expenses = await expenseModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!expenses) {
        return res.status(404).json({ error: 'No such expense' })
    }

    res.status(200).json(expenses)
}

const getSearchexpenses = async (req, res) => {
    const query = { $text: { $search: req.query.search } }
    const searchResult = await expenseModel.find(Enoch)
    console.log('this is a text', searchResult);
    res.status(200).json(searchResult)
}



module.exports = {
    createexpense,
    getexpenses,
    getexpense,
    deleteexpense,
    updateexpense,
    getSearchexpenses
}