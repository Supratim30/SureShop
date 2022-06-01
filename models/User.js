const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {isEmail} = require('validator');

//creating the SCHEMA
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minLength: [6, 'Minimum password length must be 6 characters']
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
})


module.exports = User = mongoose.model('user', UserSchema);