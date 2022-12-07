const productionModel = require('../../models/dispenser/productionModel')
const mongoose = require('mongoose')
const moment = require('moment');

// get all Productions
const getProductions = async (req, res) => {
    const search = req.query.search || "";
    const Productions = await productionModel.find({
        personel: { $regex: search, $options: "i" },
        // deliveryData: { $regex: search, $options: "i" }
    }).sort({ date: 1 })
    console.log(req.query.search);
    
    res.status(200).json(Productions)
}

// get single Productions
const getProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findById(id)

    if (!Productions) {
        return res.status(404).json({error: 'No such Production'})
    }

    res.status(200).json(Productions)
}

// create a Production
const createProduction = async (req, res) => {
     const {
            // basic Details
            personel,
            date,
            emptyBottle,
            quantityProduced
} = req.body
    // ProductionsData = req.body

    // add doc to db
    try {
        const production = await productionModel.create({
            personel,
            date,
            emptyBottle,
            quantityProduced
        })
        // console.log(ProductionsData);
        res.status(200).json(production)
    } catch (error) {
        res.status(400).json({error: error.message})
        console.log(error);
    }
}

// delete Productions
const deleteProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findOneAndDelete({_id: id})

    if (!Productions) {
        return res.status(404).json({error: 'No such Production'})
    }

    res.status(200).json(Productions)
}

// update Productions
const updateProduction = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Productions'})
    }
    
    const Productions = await productionModel.findOneAndUpdate({_id: id}, {
            ...req.body
        })

    if (!Productions) {
        return res.status(404).json({ error: 'No such Production' })
    }

    res.status(200).json(Productions)
}

const getMonthlyTotalProduction = async (req, res) => {
    const months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    // const query = { $text: { $search: req.query.search } }
    const monthlyTotals =[]
    const searchResult = await productionModel.find().sort({ date: 1 })
   
    searchResult.forEach(item => {
        monthlyTotals.push({
            year: moment(item.date).format('yyyy'),
            date:  moment(item.date).format('M'),
            quantityProduced: item.quantityProduced
        })
    });
    const y = []
    console.log('this is a text', monthlyTotals);

    let totalsales = monthlyTotals.reduce((acc, {
        year,
        date,
        quantityProduced
}) => { console.log('this is b4 acc',  year);
        acc[date +'/'+'1'+'/'+ year] =(acc[date +'/'+'1'+'/'+ year] || 0)  + quantityProduced ;
        console.log('this is acc',  acc);
  return acc;
} ,{});
console.log('totalSales before',totalsales)
totalsales = Object.entries(totalsales)
// .sort((a, b) =>  moment(a[0]).format('MYYYY') - moment(b[0]).format('MYYYY') )
.map((v) => ({ date: moment(v[0]).format('MMMM YYYY'), quantityProduced: v[1] }))



    
    console.log('totalSales',totalsales)
    res.status(200).json(totalsales)
}

const getTotalProduction = async (req, res) => {
    const TotalProduction = await productionModel.find()

    const totals=[]
    TotalProduction.forEach(item => {
        totals.push(item.quantityProduced)
    });

    const totalValue = totals.reduce((a, b) => {
        return a+b
    })
    
    res.status(200).json({
        title: 'Total Production',
        amount: totalValue,
    });
}



module.exports = {
    createProduction,
    getProductions,
    getProduction,
    deleteProduction,
    updateProduction,
    getMonthlyTotalProduction,
    getTotalProduction
}