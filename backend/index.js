const express = require("express")
const cors = require("cors")
const port = process.env.port || 3001
const app = express();


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
