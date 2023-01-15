
const mongoose = require('mongoose')
const moment = require('moment');
const sachetSales = require('../../models/sachet/salesModel')


// get all sales
const getSales = async (req, res) => {
    const search = req.query.search || "";
    let month = req.query.month || "All";

    const sales = await sachetSales.find({
        fullName: { $regex: search, $options: "i" },
    }).sort({ deliveryDate: -1 })
    
    res.status(200).json(sales)
}

// get total sales
const getTotalSales = async (req, res) => {
    const TotalSales = await sachetSales.find()

    const totals = []
    TotalSales.forEach(item => {
        totals.push(item.netSales)
    });

    const totalValue = totals.reduce((a, b) => {
        return a + b
    })

    res.status(200).json({
        title: 'Total Sales',
        amount: totalValue,
    });
}

// create new sale record
const createSales = async (req, res) => {
    const {
        fullName,
        date,
        totalQuantity,
        quantityNotSold,
        loadingBags,
        topupBags,
        quantityReturned,
        totalQuantitySold,
        expenses,
        expenseItemName,
        expenseItemAmount,
        totalExpenses,
        sales,
        QuantitySold,
        unitCost,
        netSales,
        amount,
        totalSales,
        salesDeficit,
        creditsOwed,
        creditorDetails,
        TotalCreditOwed,
        creditsPaid,
        payeeDetails,
        totalCreditPaid,
        hasCreditPaid,
        hasCreditOwed,
        hasExpenses
    } = req.body

    // add doc to db
    try {
        const sachetSale = await sachetSales.create({
           fullName,
           date,
           totalQuantity,
           quantityNotSold,
           loadingBags,
           topupBags,
           quantityReturned,
           totalQuantitySold,
           expenses,
           expenseItemName,
           expenseItemAmount,
           totalExpenses,
           sales,
           QuantitySold,
           unitCost,
           netSales,
           amount,
           totalSales,
           salesDeficit,
           creditsOwed,
           creditorDetails,
           TotalCreditOwed,
           creditsPaid,
           payeeDetails,
           totalCreditPaid,
           hasCreditPaid,
           hasCreditOwed,
           hasExpenses
        })
        // console.log(salesData);
        res.status(200).json(sachetSale)
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
        console.log(error);
    }
}

// update existing sales
const updateSale = async (req, res) => {
    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such sales'
        })
    }

    const sales = await sachetSales.findOneAndUpdate({
        _id: id
    }, {
        ...req.body
    })

    if (!sales) {
        return res.status(404).json({
            error: 'No such sale'
        })
    }

    res.status(200).json(sales)
}

// delete a posted sales record
const deleteSale = async (req, res) => {
    const {
        id
    } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            error: 'No such sales'
        })
    }

    const sales = await sachetSales.findOneAndDelete({
        _id: id
    })

    if (!sales) {
        return res.status(404).json({
            error: 'No such sale'
        })
    }

    res.status(200).json(sales)
}

module.exports = {
    createSales,
    getSales,
    // getSale,
    deleteSale,
    updateSale,
    // getMonthlyTotalSales,
    getTotalSales
}