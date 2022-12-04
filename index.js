const express = require('express')
const generateFile = require('./api/generateFile')
const port = 5000;
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/generate",generateFile)

require("dotenv").config()


try {
    
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      })
      .then(() =>
        console.log("MongoDB successfully connected")
      )
      .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }

app.listen(port,()=>{
console.log(`App running on port ${port}`)
})