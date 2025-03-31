const express = require("express");
const {
  register,
  login,
  getUserProfile,
} = require("../controllers/authController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;