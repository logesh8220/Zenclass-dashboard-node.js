const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    Submitted: {
        type: Number,
        required: true,
    },
    Pending: {
        type: Number,
        required: true
    },

}
    ,
    {
        timestamps: true
    })

    module.exports = mongoose.model('tasks',TaskSchema)