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
const { create, list } = require("../controllers/category");

// Routes
router.post("/create/:id", requireSignIn, isAuth, permission(1), create);
router.get("/list", list);

module.exports = router;
