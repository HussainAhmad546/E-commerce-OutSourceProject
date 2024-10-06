const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["active" , "blocked"], 
    default: 'active',
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
},
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
