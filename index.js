const express = require('express')
const app = express();
const cors = require('cors');
const dataRoutes = require('./Routes/dataRoutes');
require("dotenv").config();

app.use(cors())
app.use(express.json())
app.use('/api',dataRoutes)




 app.listen(process.env.PORT || 3000 ,()=>{
        console.log("Server is Running");
})


