const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  mobileNumber: { type: String },
  contactNumber: { type: String },
  dateOfBirth: { type: Date },
  nationality: { type: String },
  gender: { type: String },
  location: { type: String },
  highestQualification: { type: String },
  yearsOfExperience: { type: Number },
  currentJobFunction: { type: String },
  desiredJobFunction: { type: String },
  availability: { type: String }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
