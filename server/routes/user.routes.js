
const express = require("express");
const { userRegister, userLogin, userUpdate, userDelete, getUserData } = require("../controller/user.controller");
// const multer = require('multer');

const UserRouter = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

UserRouter.post("/signup", userRegister);
UserRouter.post("/single", getUserData);

UserRouter.post("/login", userLogin);
UserRouter.patch("/edit/:UserId", userUpdate);
UserRouter.delete("/delete", userDelete);

module.exports = {
    UserRouter
};
