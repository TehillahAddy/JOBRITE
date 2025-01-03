const express = require('express');
const bcrypt = require('bcryptjs'); // Updated to use bcryptjs
const User = require('../models/User');
const router = express.Router();

const validatePassword = (password) => {
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
};

router.post('/', async (req, res) => {
  const { firstName, lastName, username, email, password, mobileNumber, contactNumber, dateOfBirth, nationality, gender, location, highestQualification, yearsOfExperience, currentJobFunction, desiredJobFunction, availability } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use' });
  }
  if (!firstName || !lastName || !username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'Password does not meet the criteria' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      mobileNumber,
      contactNumber,
      dateOfBirth,
      nationality,
      gender,
      location,
      highestQualification,
      yearsOfExperience,
      currentJobFunction,
      desiredJobFunction,
      availability
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
