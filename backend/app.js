const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Add this line
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS
app.use(cors()); // Allow all origins by default

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Routes
app.use(userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
