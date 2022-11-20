const DBSale = require('../../models/dispenser/salesModel')
const mongoose = require('mongoose')

// get all sales
const getSales = async (req, res) => {
    const search = req.query.search || "";
    let month = req.query.month || "All";

    const monthOptions = [
        "January",
        "February",
        "march",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const sales = await DBSale.find({
        deliveryPerson: { $regex: search, $options: "i" },
        // deliveryData: { $regex: search, $options: "i" }
    }).sort({ createdAt: -1 })
    // console.log(query);
    
    res.status(200).json(sales)
}

// get single sales
const getSale = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such sales'})
    }
    
    const sales = await DBSale.findById(id)

    if (!sales) {
        return res.status(404).json({error: 'No such sale'})
    }

    res.status(200).json(sales)
}

// create a sale
const createSales = async (req, res) => {
     const {
            // basic Details
            deliveryPerson,
            deliveryDate,
            deliveryInfos,
            deliveryData,
            totalPaid,
            totalRemaining
} = req.body
    // salesData = req.body

    // add doc to db
    try {
        const dbSale = await DBSale.create({ deliveryPerson,
            deliveryDate,
            deliveryInfos,
            deliveryData,
            totalPaid,
            totalRemaining })
        // console.log(salesData);
        res.status(200).json(dbSale)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete sales
const deleteSale = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such sales'})
    }
    
    const sales = await DBSale.findOneAndDelete({_id: id})

    if (!sales) {
        return res.status(404).json({error: 'No such sale'})
    }

    res.status(200).json(sales)
}

// update sales
const updateSale = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such sales'})
    }
    
    const sales = await DBSale.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!sales) {
        return res.status(404).json({ error: 'No such sale' })
    }

    res.status(200).json(sales)
}

const getSearchSales = async (req, res) => {
    const query = { $text: { $search: req.query.search } }
    const searchResult = await DBSale.find(Enoch)
    console.log('this is a text', searchResult);
    res.status(200).json(searchResult)
}



module.exports = {
    createSales,
    getSales,
    getSale,
    deleteSale,
    updateSale,
    getSearchSales
}