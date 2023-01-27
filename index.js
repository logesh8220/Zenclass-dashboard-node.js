const express = require('express')
const app = express();
const cors = require('cors');
const dataRoutes = require('./Routes/dataRoutes');
const mongoose = require('mongoose');
require("dotenv").config();

app.use(cors())
app.use(express.json())
app.use('/api', dataRoutes)



mongoose.connect(
    process.env.DB_URI,

    () => {
        console.log('Connected to MongoDB');
    }
);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running");
})


