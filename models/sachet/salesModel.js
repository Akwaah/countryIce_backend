const mongoose = require('mongoose')

const Schema = mongoose.Schema

const creditorDetailsSchema = new Schema({
    creditorName: {
            type: String,
            required: false
        },
        creditAmount: {
            type: Number,
            required: false,
            default: 0
        },
})

const payeeDetailsSchema = new Schema({
    payeeName: {
            type: String,
            required: false
        },
        amount: {
            type: Number,
            required: false,
            default: 0
        }
})

const salesSchema = new Schema({
    // basic Details
    fullName: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    totalQuantity: {
        type: Number,
        required: false
    },
    quantityNotSold: {
        type: Number,
        required: false
    },
    loadingBags: {
        type: Number,
        required: false
    },
    topupBags: {
        type: Number,
        required: false
    },
    quantityReturned: {
        type: Number,
        required: false
    },
    totalQuantitySold: {
        type: Number,
        required: false
    },

    // Expenses
    expenses: {
        type: Array
    },
    expenseItemName: {
        type: String,
        required: false
    },
    expenseItemAmount: {
        type: Number,
        required: false
    },
    totalExpenses: {
        type: Number,
        required: false
    },

    // Sales
    sales: {
        type: Array
    },
    QuantitySold: {
        type: Number,
        required: false
    },
    unitCost: {
        type: Number,
        required: false
    },
    netSales: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    totalSales: {
        type: Number,
        required: false
    },
    salesDeficit: {
        type: Number,
        required: false
    },

    // Credit Owed
    creditsOwed: {
        type: Array
    },
    creditorName: {
        type: String,
        required: false
    },
    creditAmount: {
        type: Number,
        required: false,
        default: 0
    },
payeeName: {
        type: String,
        required: false
    },
    amount: {
        type: Number,
        required: false,
        default: 0
    },
    // creditorDetails: {
    //     type: creditorDetailsSchema,
    //     required: false
    // },
    TotalCreditOwed: {
        type: Number,
        required: false
    },

    // Credit Paid
    creditsPaid: {
        type: Array
    },
    // payeeDetails: {
    //         type: payeeDetailsSchema,
    //         required: false
    // },
    totalCreditPaid: {
        type: Number,
        required: false
    },
    hasCreditPaid: {
        type: Boolean
    },
    hasCreditOwed: {
        type: Boolean
    },
    hasExpenses: {
        type: Boolean
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('sachetSales', salesSchema)