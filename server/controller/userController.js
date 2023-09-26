const User = require("../models/User");

exports.createUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      country,
      state,
      city,
      DOB,
      gender,
      age,
    } = req.body;

    if (
      !firstName ||
      email ||
      country ||
      state ||
      city ||
      DOB ||
      gender ||
      age
    ) {
      return res.status(400).json({
        status: false,
        message: "Please provide all required fields.",
      });
    }

    const obj = {
      firstName,
      email,
      country,
      state,
      city,
      DOB,
      gender,
      age,
    };

    if (lastName) {
      obj.lastName = lastName;
    }

    const newUser = User(obj);

    await newUser.save();

    res.status(200).json({
      status: true,
      message: "New user created.",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};
