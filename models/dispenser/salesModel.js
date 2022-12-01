const mongoose = require('mongoose')

const Schema = mongoose.Schema

const deliveryDataSchema = new Schema({
    clientName: {
        type: String,
        required: false
            },
    bottleDelivered: {
        type: Number,
        required: false
            },
    bottleCollected: {
        type: Number,
        required: false
            },
    unitPrice: {
        type: Number,
        required: false
            },
    amountPaid: {
        type: Number,
        required: false
            },
    expectedAmount: {
        type: Number,
        required: false
            },
    amountRemaining: {
        type: Number,
        required: false
            },
})

const salesSchema = new Schema({
            // basic Details
    deliveryPerson: {
        type: String,
        required: true
            },
    deliveryDate: {
                type: String,
        default: Date.now(),
        
            },
    deliveryInfos: {
                type: Array
            },
            deliveryData: {
                type: deliveryDataSchema,
                required: false
            },
            totalPaid: {
        type: Number,
        required: true
            },
            totalRemaining: {
        type: Number,
        required: true
            }

}, { timestamps: true })

module.exports = mongoose.model('DBSale', salesSchema)   