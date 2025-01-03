const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 10000;
require('dotenv').config();

// Middleware
const allowedOrigins = [
  'http://localhost:3000',
  'https://jobrite.vercel.app',
  'https://jobrite-tehillah-addys-projects.vercel.app'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
})); 



app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('MongoDB URI is not set');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');

// Use routes
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);

// Handle root route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
