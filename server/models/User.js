const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    // required:true
  },
  email: {
    type: String,
    required: true,
  },
  country: {
    type: mongoose.Types.ObjectId,
    ref: "Location",
  },
  state: {
    type: mongoose.Types.ObjectId,
  },
  city: {
    type: mongoose.Types.ObjectId,
  },
  gender: {
    type: String,
    enum: ["Male", "Fe-male", "other"],
    default: "Male",
  },
  DOB: {
    type: Number,
  },
  age: {
    type: Number,
    required: true,
  },
},{
    timestamps:true
});

const User = mongoose.model("user", userSchema);
module.exports = User;
