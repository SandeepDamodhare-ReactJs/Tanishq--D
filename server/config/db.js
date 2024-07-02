const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect("mongodb+srv://sdamodhare5:FRpPxXFBzc2EaOZn@cluster0.88tkp80.mongodb.net/sandeep?retryWrites=true&w=majority&appName=Tanishq", { useNewUrlParser: true }).then(() => console.log("connect")).catch((e) => console.log(e))

module.exports = {
    connection
}