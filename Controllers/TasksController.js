const tasks = require('../Model/TasksSchema')
const totals = require('../Model/Total')
const gettask = async (req,res)=>{
    try {
        const data = await tasks.find()
        if(data){
            res.status(200).json({data,Mesaage:"Data fetch succes"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({Message:"Somthing wrong in fetch data"})
    }
}

const posttask = async (req,res)=>{
    try {
        const data = await tasks.create(req.body)
        if(data){
           await totals.updateOne({ TSubmitted: req.body.Submitted, TPending:req.body.Pending })
            res.status(200).json({Message:"Data added successfully"})
        }else{
            res.status(500).json({Message:"Somthing wrong in insert data in to tasks"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({Message:"Somthing wrong in add data"})
    }
}

module.exports = {gettask,posttask}