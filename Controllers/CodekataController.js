const codekatas = require('../Model/CodekataSchema')
const totals = require('../Model/Total')

const getcodekata = async (req, res) => {
    try {
        const data = await codekatas.find()
        if (data) {
            res.status(200).json({ data, Mesaage: "Data fetch succes" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in fetch data" })
    }
}
const postcodekata = async (req, res) => {
    try {
        const data = await codekatas.create(req.body)
        if (data) {
            const getdata = await totals.find()
            let value = Object.values(req.body)
            const addpoints = getdata[0].CTotal + value[1]
            const update = await totals.updateOne({ CTotal: addpoints, CToday: value[1] })
            res.status(200).json({ Message: "Data added successfully" })
        } else {
            res.status(500).json({ Message: "Somthing wrong in insert data in to codekata" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in add data" })
    }
}
const getotal = async (req, res) => {
    try {
        const data = await totals.find()
        if (data) {
            res.status(200).json({ data, Mesaage: "Data fetch succes" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in fetch data" })
    }
}
const postotal = async (req, res) => {
    try {
        const data = await totals.create(req.body)
        if (data) {
            res.status(200).json({ data, Mesaage: "Data added successfully" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong " })
    }
}

module.exports = { getcodekata, postcodekata,getotal,postotal }
