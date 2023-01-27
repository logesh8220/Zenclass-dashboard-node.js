const Classes = require('../Model/Classes')

const getClasses = async (req, res) => {
    try {
        const data = await Classes.find()
        if (data) {
            res.status(200).json({ data, Mesaage: "Data fetch succes" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in fetch data" })
    }
}
const postClasses = async (req, res) => {
    try {
        const data = await Classes.create(req.body)
        if (data) {
            res.status(200).json({ Message: "Data added successfully" })
        } else {
            res.status(500).json({ Message: "Somthing wrong in insert data in to completion" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in add data" })
    }
}
const putClasses = async (req, res) => {
    try {
        const data = await Classes.findOneAndUpdate({ Day: +req.query.Day }, { $set: req.body })
        if (data) {
            res.status(200).json({ Message: "Data updated successfully" })
        } else {
            res.status(500).json({ Message: "Somthing wrong in update data in to completion" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in update data" })
    }
}
const putStatus = async (req, res) => {
    try {
        const data = await Classes.findOneAndUpdate({ Day: +req.query.Day }, {$set: {Status:"Started"}})
        if (data) {
            res.status(200).json({ Message: "Data updated successfully" })
        } else {
            res.status(500).json({ Message: "Somthing wrong in update data in to completion" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ Message: "Somthing wrong in update data" })
    }
}
module.exports = { getClasses, postClasses, putClasses,putStatus }