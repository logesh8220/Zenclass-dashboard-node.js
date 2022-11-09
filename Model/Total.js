const mongoose = require('mongoose')

const Total_Today_Schema = new mongoose.Schema({
    CToday: {
        type: Number,
        default: 0
    },
    CTotal: {
        type: Number,
        default: 0,
    
    },
    WToday: {
        type: Number,
        default: 0
    },
    WTotal: {
        type: Number,
        default: 0,
    
    },
    TSubmitted:{
        type: Number,
        default: 0,
    },
    TPending:{
        type: Number,
        default: 0,
    }

})

module.exports = mongoose.model('totals', Total_Today_Schema)