const mongoose = require('mongoose')

const CompletionSchema = new mongoose.Schema({
    Completion: {
        type: Number,
        default:100,
    },
}
    ,
    {
        timestamps: true
    })

    module.exports = mongoose.model('completions',CompletionSchema)