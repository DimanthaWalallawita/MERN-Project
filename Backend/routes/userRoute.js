const express = require("express");
const { registerUser, loginUser, logout, getUser, loginStatus, updateUser, changePassword, forgotPassword, resetpassword } = require("../controllers/userController");
const router = express.Router();
const protect = require("../middleWare/authMiddleWare")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", updateUser);
router.patch("/changepassword", changePassword);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router