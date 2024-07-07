const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    about: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});

// Model
const UserModel = mongoose.model("UserProfile", userSchema);

module.exports = {
    UserModel
};
