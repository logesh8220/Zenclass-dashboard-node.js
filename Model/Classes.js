const mongoose = require('mongoose')

const classes = new mongoose.Schema({
    Title: {
        type: String,
        required:true,
    },
    Date: {
        type: String,
    },
    StartTime: {
        type: String,
        required:true,
    
    },
    EndTime: {
        type: String,
        required:true,
    
    },
    Contents: {
        type: String,
        required:true,
    },
    PreRead: {
        type: String,
        default: "No Preread Available",
        
    
    },
    Task:{
        type: String,
        default: 0,
    },
    ClassType:{
        type: String,
        default: "Additional",
    },
    Day:{
        type:Number,
        default:0
    },
    Status:{
        type:String,
        default:"Up Comming"
    }
})

module.exports = mongoose.model('classes', classes)