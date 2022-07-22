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
} = require("../controllers/product");

const fileUploader = require("../middleware/fileUploader");

// Routes
router.post("/create/:id", requireSignIn, isAuth, permission(1),fileUploader.single('image'), create);
router.put("/update/:id/:proId", requireSignIn, isAuth, permission(1), update);
router.delete(
  "/remove/:id/:proId",
  requireSignIn,
  isAuth,
  permission(1),
  remove
);
router.get("/byId/:id", getById);
router.get("/list", list);

module.exports = router;
