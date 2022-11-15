const mongoose = require('mongoose')

const Schema = mongoose.Schema

const staffSchema = new Schema({
            // basic Details
    staffName: {
        type: String,
            },
    hireDate: {
        type: String,
    },
    staffPhone: {
            type: Number
            },
    staffAddress: {
            type: String
    },
    staffDepartment: {
            type: String
    },
    staffRole: {
            type: String
            },
    staffSalary: {
        type: Number
            }
}, { timestamps: true })

module.exports = mongoose.model('staffModel', staffSchema)   