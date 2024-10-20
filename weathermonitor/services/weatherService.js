// services/weatherService.js
const axios = require('axios');
const { processWeatherData } = require('./weatherProcessor');
const dotenv = require('dotenv');

dotenv.config();

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

const fetchWeatherData = async () => {
    for (const city of cities) {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}`;

        try {
            const response = await axios.get(url);
            console.log(`Weather data for ${city}:`, response.data);
            await processWeatherData(response.data); // Process and save the data
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error.response?.data || error.message);
        }
    }
};

const scheduleWeatherFetch = (interval) => {
    console.log(`Scheduling weather data fetch every ${interval} minutes...`);
    setInterval(async () => {
        await fetchWeatherData();
    }, interval * 60 * 1000); // Convert minutes to milliseconds
};

module.exports = { fetchWeatherData, scheduleWeatherFetch };
