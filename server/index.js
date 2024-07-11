

// import section
const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { UserRouter } = require("./routes/user.routes")
require("dotenv").config()
// const multer = require('multer');


// middleware section 
const app = express()
app.use(cors())
app.use(express.json())



  app.use("/user", UserRouter)
let port = process.env.PORT

 app.get("/", (req,res)=> {
    res.send("welcome to my day 1")
 })


//  app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up Multer for file uploads



// server run section
  app.listen(port , async()=> {

    try {  
    await connection
    console.log('data base is connected')
    console.log(`server is running at port http://localhost:${port}`) 
    } catch (error) {
        console.log(error)
    }

  })