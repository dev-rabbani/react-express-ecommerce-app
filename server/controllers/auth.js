// External Imports
const bcrypt = require("bcrypt");
const { expressjwt } = require("express-jwt");
const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

// Internal Imports
const User = require("../models/user");
const SECRET_kEY = process.env.SECRET_kEY;

// signup  controller
const signup = async (req, res) => {
  try {
    const { email } = req.body;
    const filterUser = await User.findOne({ email });
    if (filterUser) {
      return res.json({
        msg: "User already exist with this email",
      });
    } else {
      const userData = req.body;
      const newUser = await new User(userData);
      const data = await newUser.save();
      return res.json({
        msg: "User created suceessfully",
        data,
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// signin  controller
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const isValid = await bcrypt.compare(password, user.password);

      const { _id, userName, email, role, mobileNo } = user;

      const data = {
        _id,
        userName,
        email,
        role,
        mobileNo,
      };

      // TODO: 30d for development purpose
      const token = jwt.sign(data, SECRET_kEY, { expiresIn: "30d" });

      res.cookie("t", token);

      if (isValid) {
        return res.json({
          msg: "Login Successfully",
          data,

          // TODO: dev purpose
          token

        });
      } else {
        return res.json({
          msg: "Password does't match",
        });
      }
    } else {
      return res.json({
        msg: "User does't exists",
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// signout
const signout = async (req, res) => {
  try {
    res.clearCookie("t");
    return res.json({
      msg: "Sing Out successfully",
    });
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// requireSignIn middleware
const requireSignIn = expressjwt({
  secret: SECRET_kEY,
  algorithms: ["HS256"],
});

// isAuth middleware
const isAuth = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    if (!token) {
      return res.json({
        msg: "Access Denied!!",
      });
    }
    const data = jwt.verify(token, SECRET_kEY);
    if (req.params.id === data._id) {
      req.user = data;
      next();
    } else {
      return res.json({
        msg: "You are not authenticate user",
      });
    }
  } catch (error) {
    return res.json({
      error,
    });
  }
};

// isAdmin middleware
const isAdmin = (req, res, next) => {
  try {
    // console.log(req.user);
    // if (req.user.role === 0) {
    //   return res.json({
    //     msg: "Admin resourse! Access denied",
    //   });
    // }
    next();
  } catch (error) {
    return res.json({
      error,
    });
  }
};

const permission = (userRole) => {
  return function (req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({
        msg: "Unauthorized user",
      });
    }
    try {
      const { role } = jwtDecode(token);
      if (1 === role && userRole === 1) {
        return next();
      } else {
        return next(
          res.status(401).json({
            msg: "You are not an authorized user",
          })
        );
      }
    } catch (error) {
      res.json({
        msg: "You do not have permission for this API",
      });
    }
  };
};

module.exports = {
  signup,
  signin,
  signout,
  requireSignIn,
  isAuth,
  isAdmin,
  permission,
};
