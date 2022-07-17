// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// imageSchema
const imageSchema = new Schema(
  {
    image: String,
  },
  { timestamps: true }
);

// Images collection
module.exports = mongoose.model("Image", imageSchema);
