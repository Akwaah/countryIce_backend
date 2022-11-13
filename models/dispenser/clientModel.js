const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientSchema = new Schema({
    contactPerson: {
        type: String,
    },
    date: {
        type: String
    },
    organisation: {
        type: String
    },
    location: {
        type: String
    },
    phoneNumber: {
        type: Number
    }
}, { timestamps: true })

module.exports = mongoose.model('clientModel', clientSchema)