// External imports
const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/secret/:id", requireSignIn, isAuth, userById);

module.exports = router;
