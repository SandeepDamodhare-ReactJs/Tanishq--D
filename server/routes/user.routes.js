
 const express = require("express")
const { userRegister, userLogin } = require("../controller/user.controller")

 const UserRouter = express.Router()


 UserRouter.post("/signup", userRegister)
 UserRouter.post("/login", userLogin)


  module.exports = {
    UserRouter
  }