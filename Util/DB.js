const mongoose = require('mongoose')
require('dotenv').config()
const connectDB = async () => {
    try {

        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })


        console.log("Connected Successfully")
    } catch (error) {
       console.log(error,"error in connecting DB")
    }

}
module.exports = connectDB