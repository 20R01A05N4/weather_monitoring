// index.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { scheduleWeatherFetch } = require('./services/weatherService'); // Import the function

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        // Start fetching weather data every 5 minutes
        scheduleWeatherFetch(5);
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
