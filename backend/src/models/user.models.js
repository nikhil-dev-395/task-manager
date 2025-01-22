/*
user.models.js is a file that contains the schema of the user model.  it contains name , email and password
at last i also added a timestamp to the schema so that it will show the time when the user is created.
*/

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
