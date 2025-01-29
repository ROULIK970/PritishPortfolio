import { User } from "../Models/user.model.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    //extract all fields from req.body
    const { name, email, password } = req.body;

    //check if all fields are there
    if ([name, email, password].some((field) => field?.trim() === "")) {
      return res
        .status(401)
        .json({ message: "All fields are required", success: false });
    }

    //find user from database and
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(409)
        .json({ message: "User already exists", success: false });
    }

    //create new user
    const user = await User.create({ name, email, password });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) return res.status(500).json({ message: "Server Error" });

    return res
      .status(201)
      .json({ createdUser, message: "Signup Success", success: true });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email || password)) {
      return res
        .status(401)
        .json({ mesage: "Email and Password required!", success: false });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "Email or Password doesn't match!", success: false });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      return res.status(404).json({
        message: "Email or Password doesn't match!",
        success: false,
      });
    }

    const jwtToken = await jwt.sign(
      {
        email: user.email,
        id: user._id,
        name: user.name
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).json({
      message: "Logged In Successfully",
      success: true,
      name: user.name,
      email: email,
      jwtToken,
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Internal Server Eror",
        success: false,
        error: error.message,
      });
  }
};
