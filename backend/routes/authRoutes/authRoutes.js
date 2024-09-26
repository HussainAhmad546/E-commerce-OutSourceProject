const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
  forgetPassword,
  resetPassword,
} = require("../../controllers/authControllers/authController");
const  authMiddleware  = require('../../middleware/authMiddleware');
const verifyToken = require('../../middleware/verifyToken');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/check-auth", authMiddleware, checkAuth);
router.post('/forget-password', forgetPassword);
router.post('/reset-password/:token', verifyToken, resetPassword);

module.exports = router;
