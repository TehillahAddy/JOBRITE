const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// Import routes
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');

// Use routes
app.use('/api/signup', signupRoute);
app.use('/api/login', loginRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));