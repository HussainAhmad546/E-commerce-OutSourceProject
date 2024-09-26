const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const nodemailer = require("nodemailer");
const authMiddleware = require("../../middleware/authMiddleware");

//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (checkUser)
      return res.json({
        success: false,
        message: "User Already exists with the same email! Please try again",
      });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.json({
        success: false,
        message: "User doesn't exist! Please register first",
      });

    const checkPasswordMatch = await bcrypt.compare(
      password,
      checkUser.password
    );
    if (!checkPasswordMatch)
      return res.json({
        success: false,
        message: "Incorrect password! Please try again",
      });

    const token = jwt.sign(
      {
        id: checkUser._id,
        role: checkUser.role,
        email: checkUser.email,
        userName: checkUser.userName,
      },
      process.env.CLIENT_SECRET_KEY,
      { expiresIn: "60m" }
    );

    res.cookie("token", token, { httpOnly: true, secure: false }).json({
      success: true,
      message: "Logged in successfully",
      user: {
        email: checkUser.email,
        role: checkUser.role,
        id: checkUser._id,
        userName: checkUser.userName,
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred",
    });
  }
};

//logout
const logoutUser = (req, res) => {
  res.clearCookie("token").json({
    success: true,
    message: "Logged out successfully!",
  });
};


const checkAuth = (req, res) => {
  const user = req.user; // The user will be populated by authMiddleware
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
};


// Forget Password Controller
const forgetPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({ message: "Wrong email, enter correct email" });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const token = jwt.sign({ id: user._id }, process.env.CLIENT_SECRET_KEY, { expiresIn: '1h' });
  if (!token) {
    return res.status(500).json({ message: "Server error" });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Reset your password",
    html: `<a href='http://localhost:5173/reset-your-password/${token}'>Click here to reset your password</a>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email", error });
    }
    return res.status(200).json({ message: `Email sent to ${email}`, token });
  });
};

// Reset Password Controller
const resetPassword = async (req, res) => {
  const { password } = req.body; // Get new password
  console.log("Password received:", password); // Debug password

  try {
      const user = req.user; // Get user from request
      if (!user) {
          console.log("User not found"); // Log if user is not found
          return res.status(404).json({ message: "User not found" });
      }

      console.log("User found:", user);

      // Hash the password
      const saltRounds = Number(process.env.SALTROUND);
      if (isNaN(saltRounds)) {
          console.log("Invalid SALTROUND:", process.env.SALTROUND); // Check if SALTROUND is valid
          return res.status(400).json({ message: "Invalid SALTROUND value" });
      }

      const hash = await bcrypt.hash(password, saltRounds);
      console.log("Hashed password:", hash);

      user.password = hash; // Update user password

      // Save user in the database
      await user.save();
      console.log("Password updated successfully");

      return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
      console.error("Error resetting password:", error); // Log the error
      return res.status(500).json({ message: "Error resetting password" });
  }
};




module.exports = { registerUser, loginUser, logoutUser, checkAuth , resetPassword , forgetPassword};
