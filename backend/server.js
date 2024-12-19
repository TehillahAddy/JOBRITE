const express = require('express');
const cors = require('cors'); // Import cors
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

// Helper function to validate password
const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
};

// Signup route
app.post('/api/signup', async (req, res) => {
    const { firstName, lastName, username, email, password, mobileNumber, contactNumber } = req.body;

    // Basic validation
    if (!firstName || !lastName || !username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Password validation
    if (!validatePassword(password)) {
        return res.status(400).json({ message: 'Password does not meet the criteria' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('User signed up:', { firstName, lastName, username, email, hashedPassword, mobileNumber, contactNumber });
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
