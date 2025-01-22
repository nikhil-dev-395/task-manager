const { sign } = require("jsonwebtoken");
const User = require("../models/user.models");
const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check user already exist or not
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ error: "User already exist" });
    }
    const user = await User.create({ name, email, password });
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(501).json({ error: "Internal server error && signup" });
  }
};
const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check user already exist or not
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({ error: "User not exist" });
    }
    const user = await User.findOne({ email, password });
    const token = sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(501).json({ error: "Internal server error && signup" });
  }
};

module.exports = { SignUp, SignIn };
