// External Imports
const express = require("express");
const router = express.Router();

// Internal Imports
const fileUploader = require("../middleware/fileUploader");
const {
  singleFileUploader,
  multipleFileUploader,
  imageUpload,
} = require("../controllers/fileUplaod");

// routes
router.post("/single-upload", fileUploader.single("image"), singleFileUploader);
router.post(
  "/multiple-upload",
  fileUploader.array("images", 5),
  multipleFileUploader
);
router.post("/image-upload", imageUpload);

// Exports router
module.exports = router;
