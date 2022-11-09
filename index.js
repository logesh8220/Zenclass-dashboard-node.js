const express = require('express')
const app = express();
const cors = require('cors');
const connectDB = require('./Util/DB');
const dataRoutes = require('./Routes/dataRoutes');
require("dotenv").config();

app.use(cors())
app.use(express.json())
app.use('/api',dataRoutes)



connectDB().then(()=>{
    app.listen(process.env.PORT || 3000 ,()=>{
        console.log("Server is Running");
    })
})
.catch((err)=> console.log(err,"error in connectiong BD"))

