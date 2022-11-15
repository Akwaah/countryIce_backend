const staffModel = require('../../models/general/staffModel')
const mongoose = require('mongoose')

// get all staffs
const getstaffs = async (req, res) => {
    const query = { deliveryPerson: { $search: `${req.query.search}` } }
    const staffs = await staffModel.find({ query }).sort({ createdAt: -1 })
    console.log(req.query.search);
    
    res.status(200).json(staffs)
}

// get single staffs
const getstaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such staffs'})
    }
    
    const staffs = await staffModel.findById(id)

    if (!staffs) {
        return res.status(404).json({error: 'No such staff'})
    }

    res.status(200).json(staffs)
}

// create a staff
const createstaff = async (req, res) => {
     const {
            // basic Details
            staffName,
            hireDate,
            staffPhone,
            staffAddress,
            staffDepartment,
            staffRole,
            staffSalary,
} = req.body
    // staffsData = req.body

    // add doc to db
    try {
        const staff = await staffModel.create({
            staffName,
            hireDate,
            staffPhone,
            staffAddress,
            staffDepartment,
            staffRole,
            staffSalary,
        })
        // console.log(staffsData);
        res.status(200).json(staff)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete staffs
const deletestaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such staffs'})
    }
    
    const staffs = await staffModel.findOneAndDelete({_id: id})

    if (!staffs) {
        return res.status(404).json({error: 'No such staff'})
    }

    res.status(200).json(staffs)
}

// update staffs
const updatestaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such staffs'})
    }
    
    const staffs = await staffModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!staffs) {
        return res.status(404).json({ error: 'No such staff' })
    }

    res.status(200).json(staffs)
}

const getSearchstaffs = async (req, res) => {
    const query = { $text: { $search: req.query.search } }
    const searchResult = await staffModel.find(Enoch)
    console.log('this is a text', searchResult);
    res.status(200).json(searchResult)
}



module.exports = {
    createstaff,
    getstaffs,
    getstaff,
    deletestaff,
    updatestaff,
    getSearchstaffs
}