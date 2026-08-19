const userModel = require("../models/User");
const bcrypt = require("bcryptjs");
let registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name) {
      return res.status(400).json({
        status: 0,
        message: "Name Required",
      });
    }
    if (!email) {
      return res.status(400).json({
        status: 0,
        message: "Email Required",
      });
    }
    if (!password) {
      return res.status(400).json({
        status: 0,
        message: "Password Required",
      });
    }
    let existingUser = await userModel.findOne({
      email: email,
    });
    if (existingUser) {
      return res.status(409).json({
        status: 0,
        message: "Email already Exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    return res.status(201).json({
      status: 1,
      message: "Registration Successfull",
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 0,
      message: "Failled to Register User",
      error: error,
    });
  }
};

module.exports = registerUser;
