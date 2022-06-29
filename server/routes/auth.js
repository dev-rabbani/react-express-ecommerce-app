// External imports
const express = require("express");
const router = express.Router();

// Internal Imports
const { signup, signin, signout } = require("../controllers/auth");

// Routes
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
