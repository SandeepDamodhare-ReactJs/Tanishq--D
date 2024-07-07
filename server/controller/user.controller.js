const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT
const secretKey = 'helloworld';

const userRegister = async (req, res) => {
    try {
        const { name, mobile,address, about, email, password } = req.body;

        // Check if the user already exists
        const userfindData = await UserModel.find({ email });
        console.log(userfindData);
        if (userfindData.length>=0) {
            return res.status(400).json({ msg: "User already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with the hashed password
        const newUser = new UserModel({ name, mobile,address, about, email, password: hashedPassword });

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
const {name} = findData
        res.status(200).json({ msg: "User login success", token,name,mobile,address, about,email});
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
