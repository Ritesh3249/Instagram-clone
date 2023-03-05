require("express-async-errors");
const express = require("express")
require('dotenv').config()
const cors = require("cors")
const routes=require("./routes/routes")

const connectToMongo = require("./startup/db")
const fileUpload = require("express-fileupload");
const  error = require("./middleware/error")

connectToMongo()
const port = process.env.port || 3001
const app = express();


app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));


app.use("/api",routes)

app.use(error)
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
