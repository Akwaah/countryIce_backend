const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productionSchema = new Schema({
            // basic Details
    personel: {
        type: String,
            },
    date: {
        type: String,
            },
    emptyBottle: {
            type: Number
            },
    quantityProduced: {
        type: Number
            }
}, { timestamps: true })

module.exports = mongoose.model('productionModel', productionSchema)   