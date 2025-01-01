const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 10000;
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MongoDB URI is not set');
  process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Import routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');

// Use routes
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
