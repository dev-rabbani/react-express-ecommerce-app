// external imports
const Joi = require("joi");

// userRegisterValidator
const userRegisterValidator = async (req, res, next) => {
  Joi.object({
    name: Joi.string().min(3).max(32),
    userName: Joi.string().min(4).max(12).required().alphanum(),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .regex(/^[a-zA-Z0-9]{4,12}$/),
    mobileNo: Joi.number(),
    userRole: Joi.number(),
    activeStatus: Joi.string(),
  });
  const { error, value } = userRegisterValidator.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: "Validation error",
      error: error.details[0].message,
    });
  }
  next();
};

// exports
module.exports = {
  userRegisterValidator,
};
