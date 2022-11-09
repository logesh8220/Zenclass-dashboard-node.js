const mongoose = require('mongoose')

const WebkataSchema = new mongoose.Schema({
    DAY: {
        type: String,
        required:true,
    },
    POINTS: {
        type: Number,
        default: 0,
    },
}
    ,
    {
        timestamps: true
    })

    module.exports = mongoose.model('webkatas',WebkataSchema)