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
const {
  create,
  list,
  update,
  remove,
  getById,
} = require("../controllers/category");

// Routes
router.post("/create/:id", requireSignIn, isAuth, permission(1), create);
router.put("/update/:id/:catId", requireSignIn, isAuth, permission(1), update);
router.delete(
  "/remove/:id/:catId",
  requireSignIn,
  isAuth,
  permission(1),
  remove
);
router.get("/byId/:id", getById);
router.get("/list", list);

module.exports = router;
