
const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { UserRouter } = require("./routes/user.routes")
const { AlbumRouter } = require("./routes/album.routes")
require("dotenv").config()
 
const app = express()
app.use(cors())
app.use(express.json())



app.use("/user", UserRouter)
app.use("/album", AlbumRouter)
let port = process.env.PORT

app.get("/", (req, res) => {
  res.send("welcome to my day 1")
})


app.listen(port, async () => {

  try {
    await connection
    console.log('data base is connected')
    console.log(`server is running at port http://localhost:${port}`)
  } catch (error) {
    console.log(error)
  }

})