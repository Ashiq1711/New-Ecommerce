import userModel from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};
const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid email" });
    }
    if (password.length < 6) {
      return res.json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const exgistingUser = await userModel.findOne({ email });
    if (exgistingUser) {
      return res.json({ success: false, message: "User already exist" });
    }
    // bcrypt password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = new userModel({ name, email, password: hashPassword });
    await user.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.log("User Register error", error);
    res.json({ success: true, message: error?.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user);
      return res.json({
        success: true,
        message: "User logged in successfully",
        token,
      });
    } else {
      return res.json({ success: false, message: "Invalid password" });
    }
    res.json({ success: true, message: "User logged in successfully" });
  } catch (error) {
    console.log("User Login error", error);
    res.json({ success: true, message: error?.message });
  }
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        success: true,
        message: "Admin logged in successfully",
        token,
      });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log("Admin Login error", error);
    res.json({ success: true, message: error?.message });
  }
};
const removeUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.body._id);
        res.json({ success: true, message: "User removed successfully" });
    } catch (error) {
        console.log("Remove User error", error);
        res.json({ success: true, message: error?.message });
    }
};
const updateUser = async (req, res) => {
    try {
        const {_id,  name, email, password } = req.body;
        const user = await userModel.findById(_id);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
//name check
        if (name) user.name = name;

//email check
        if (email){
            if (!validator.isEmail(email)) {
                return res.json({ success: false, message: "Invalid email" });
            }
            user.email = email;
        }

//password check
        if (password) {
            if (password.length < 6) {
                return res.json({
                    success: false,
                    message: "Password must be at least 6 characters",
                });
            }
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            user.password = hashPassword;
        }
        await user.save();
        res.json({ success: true, message: "User updated successfully" });
    } catch (error) {
        console.log(" User Update error", error);
        res.json({ success: true, message: error?.message });
    }
};
const getUser = async (req, res) => {
    try {
        const total = await userModel.countDocuments({});
        const users = await userModel.find({}); 
        res.json({ success: true, total, users, message: "Users fetched successfully" });
    } catch (error) {
        console.log(" Get user error", error);
        res.json({ success: true, message: error?.message }); 
    }
};

export { userLogin, userRegister, adminLogin, removeUser, updateUser, getUser };
