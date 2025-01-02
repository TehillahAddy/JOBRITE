const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for your User model
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  mobileNumber: String,
  contactNumber: String,
  dateOfBirth: Date,
  nationality: String,
  gender: String,
  location: String,
  highestQualification: String,
  yearsOfExperience: Number,
  currentJobFunction: String,
  desiredJobFunction: String,
  availability: String
});

// Create the User model
const User = mongoose.model('User', UserSchema, 'users'); // Ensure this is correctly set

module.exports = User;
