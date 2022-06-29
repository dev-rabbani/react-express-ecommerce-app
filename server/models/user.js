// External Imports
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

// userSchema
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: String,
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    mobileNo: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
    },
    about: {
      type: String,
      trim: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    history: {
      type: Array,
      default: [],
    },
    activeStatus: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// password hashed before enter into db
userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password") || user.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err);
        }
        if (hash) {
          user.password = hash;
        }
        next();
      });
    });
  } else {
    next();
  }
});

// Users collection
module.exports = mongoose.model("User", userSchema);
