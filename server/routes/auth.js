const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require("../controllers/authController");

// LOGIN
router.post("/login", passport.authenticate('local', { session: false }), AuthController.login);

// REGISTER
router.post("/register", AuthController.register);

module.exports = router