// External imports
const express = require("express");
const router = express.Router();

// Internal Imports
const {
  requireSignIn,
  isAuth,
  isAdmin,
  permission,
} = require("../controllers/auth");
const { create } = require("../controllers/category");

// Routes
router.post("/create", requireSignIn, create);

module.exports = router;
