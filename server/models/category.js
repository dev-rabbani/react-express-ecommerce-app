// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// categorySchema
const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      maxLength: 32,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Categories collection
module.exports = mongoose.model("Category", categorySchema);
