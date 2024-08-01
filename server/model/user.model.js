
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  about: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  accountType: { type: String, required: true } // Added field
}, {
  versionKey: false
});

const UserModel = mongoose.model("UserProfile", userSchema);

module.exports = {
  UserModel
};
