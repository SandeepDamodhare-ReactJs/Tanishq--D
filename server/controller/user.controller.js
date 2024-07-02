// const { UserModel } = require("../model/user.model")
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// const userRegister = async (req, res) => {

//    try {

//       const userfindData = await UserModel.findOne({ email: req.body.email })
//       if (userfindData) {
//          res.json({ msg: "User Already registerd" })
//       } else {
//          console.log("register call")

//          const userData = new UserModel(req.body)

         

//          await userData.save()
//          res.json({ msg: "user register success", userfindData })
//       }

//    } catch (error) {
//       console.log(error.message)
//    }
// }



// const userLogin = async (req, res) => {
//    try {
//       const findData = await UserModel.findOne({ email: req.body.email })

//       if (findData) {
//          res.json({ msg: "userLogin success" })
//       } else {
//          res.json({ msg: "registered first" })
//       }

//    } catch (error) {
//       console.log(error.message)
//    }
// }

// module.exports = {
//    userRegister, userLogin
// }





const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT
const secretKey = 'helloworld';

const userRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user already exists
        const userfindData = await UserModel.findOne({ email });
        if (userfindData) {
            return res.status(400).json({ msg: "User already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new UserModel({ name, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();
        res.status(201).json({ msg: "User registered successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const findData = await UserModel.findOne({ email });
        if (!findData) {
            return res.status(400).json({ msg: "User not registered" });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, findData.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: findData._id }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ msg: "User login success", token });
        console.log(token);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

module.exports = {
    userRegister,
    userLogin
};
