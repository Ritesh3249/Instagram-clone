const express = require("express")
require('dotenv').config()
const cors = require("cors")
const connectToMongo = require("./startup/db")
connectToMongo()
const port = process.env.port || 3001
const app = express();





app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
