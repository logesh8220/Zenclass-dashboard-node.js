const mongoose = require('mongoose')

const CodakataSchema = new mongoose.Schema({
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

module.exports = mongoose.model('codekatas', CodakataSchema)