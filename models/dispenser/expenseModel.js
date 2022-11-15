const mongoose = require('mongoose')

const Schema = mongoose.Schema

const expenseItemsSchema = new Schema({
    itemName: {
        type: String
    },
    amount: {
        type: Number
    }
})

const expenseSchema = new Schema({
            // basic Details
    staffName: {
        type: String,
            },
    date: {
        type: Date,
            },
    expenses: {
            type: expenseItemsSchema
            }
}, { timestamps: true })

module.exports = mongoose.model('expenseModel', expenseSchema)   