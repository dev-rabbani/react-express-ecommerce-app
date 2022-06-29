// External Imports
const bcrypt = require("bcrypt");
const { expressjwt } = require("express-jwt");
const jwt = require("jsonwebtoken");

// Internal Imports
const User = require("../models/user");
const SECRET_kEY = process.env.SECRET_kEY;

const userById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (user) {
      return res.json({
        msg: "User by id successfully",
        user,
      });
    } else {
      return res.json({
        msg: "User not found",
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

module.exports = {
  userById,
};
