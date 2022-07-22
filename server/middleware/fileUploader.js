// External Imports
const multer = require("multer");

// fileStorageEngine
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// maxSize
const maxSize = 10000; // 1mb

// upload method
const upload = multer({
  storage: fileStorageEngine,
  limits: {
    fieldSize: maxSize,
  },
});

module.exports = upload;
