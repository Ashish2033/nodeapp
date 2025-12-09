const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/jwtusercontroller");
const verifyToken = require("../middleware/verifytoken");


const router = express.Router();


// Register route
router.post("/register", registerUser);


// Login route
router.post("/login", loginUser);


// Protected route example
router.get("/profile", verifyToken, getProfile);


module.exports = router;