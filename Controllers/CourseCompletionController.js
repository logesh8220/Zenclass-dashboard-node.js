const completions = require('../Model/CompletoinSchema')

const getCompletion = async (req,res)=>{
    try {
        const data = await completions.find()
        if(data){
            res.status(200).json({data ,Mesaage:"Data fetch succes"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({Message:"Somthing wrong in fetch data"})
    }
}
const postCompletion = async (req,res)=>{
    try {
        const data = await completions.create(req.body)
        if(data){
            res.status(200).json({Message:"Data added successfully"})
        }else{
            res.status(500).json({Message:"Somthing wrong in insert data in to completion"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({Message:"Somthing wrong in add data"})
    }
}
const putCompletion = async (req,res)=>{
    try {
        const data = await completions.findOneAndUpdate({Completion:req.body.Completion})
        if(data){
            res.status(200).json({Message:"Data updated successfully"})
        }else{
            res.status(500).json({Message:"Somthing wrong in update data in to completion"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({Message:"Somthing wrong in update data"})
    }
}
module.exports = {getCompletion,postCompletion,putCompletion}