const { UserModel } = require("../model/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const secretKey = 'helloworld';

const userRegister = async (req, res) => {
    try {
        const { name, mobile, address, about, email, password,image } = req.body;

     
        const userfindData = await UserModel.findOne({ email });
        if (userfindData) {
            return res.status(200).json({ msg: "User already registered", success:false });
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        
 
        const newUser = new UserModel({ name, mobile, address, about, email,password: hashedPassword });


       const user =  await newUser.save();
        res.status(201).json({ msg: "User registered successfully", success:true, user });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

    
        const findData = await UserModel.findOne({ email });
        if (!findData) {
            return res.status(400).json({ msg: "User not registered" });
        }

       
        const isMatch = await bcrypt.compare(password, findData.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

    
        const token = jwt.sign({ userId: findData._id }, secretKey, { expiresIn: '1h' });
        const { name, mobile, address, about } = findData;

        res.status(200).json({ msg: "User login success", token, name, mobile, address, about, email });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};


const getUserData = async(req,res) => {

     const {email} = req.body
   
     try {
      const users = await UserModel.findOne({email})  
      if(users){
         
       res.status(200).json({msg:"user found", users, success:true})
      }else{
        res.status(200).json({msg:"user not found", success:false})
      }
     } catch (error) {
     console.log(error);   
     }
     
}


const userUpdate = async (req, res) => {
const userData = req.body
     const {UserId} = req.params
console.log("userId", UserId);
    try {
   await UserModel.findByIdAndUpdate({_id:UserId}, userData)    
   res.status(200).json({msg:"user update success!!", success:true})
    } catch (error) {
      console.log(error);
    }
};


const userDelete = async (req, res) => {
    try {
        const { email } = req.body;

     
        const findData = await UserModel.findOne({ email });

        if (!findData) {
            return res.status(404).json({ msg: "User not found" });
        }

        
        await findData.deleteOne();

        res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Server error" });
    }
};


module.exports = {
    getUserData,
    userRegister,
    userLogin,
    userUpdate,
    userDelete
};
