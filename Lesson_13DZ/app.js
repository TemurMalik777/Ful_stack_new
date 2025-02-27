const express = require('express');
require("dotenv").config()

const indexRouter = require("./routes/index.routes")//main indexRouter

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())

app.use("/api", indexRouter)

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})