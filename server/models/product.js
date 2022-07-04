// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

// productSchema
const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 60,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
    },
    image: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Products collection
module.exports = mongoose.model("Product", productSchema);
