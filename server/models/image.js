// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;

// imageSchema
const imageSchema = new Schema(
  {
    image: String,
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

// Images collection
module.exports = mongoose.model("Image", imageSchema);
