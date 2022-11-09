const webkatas = require('../Model/WebkataSchema')
const totals = require('../Model/Total')


const getWebkata = async (req, res) => {
    try {
        const data = await webkatas.find()
        if (data) {
            res.status(200).json({ data, Mesaage: "Data fetch succes" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in fetch data" })
    }
}
const postWebkata = async (req, res) => {
    try {
        const data = await webkatas.create(req.body)
        if (data) {
            const getdata = await totals.find()
            let value = Object.values(req.body)
            const addpoints = getdata[0].WTotal + value[1]
            const update = await totals.updateOne({ WTotal: addpoints, WToday: value[1] })
            res.status(200).json({ Message: "Data added successfully" })
        } else {
            res.status(500).json({ Message: "Somthing wrong in insert data in to webkata" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in add data" })
    }
}


module.exports = { getWebkata, postWebkata}