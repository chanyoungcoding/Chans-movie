const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 21,
  },
  image: {
    type: String,
    default: ''
  },
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel