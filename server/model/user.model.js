
const mongoose = require("mongoose")

// Schema

 const userSchema = mongoose.Schema({
    name:{type:String, required:true},


    mobile:{type:String, required:true},
    address:{type:String, required:true},
    about:{type:String, required:true},

    email:{type:String, required:true},
    password:{type:String, required:true}
 },{
    versionKey:false
 })

 const UserModel = mongoose.model("userprofile", userSchema)


 module.exports = {
    UserModel
 }

// model