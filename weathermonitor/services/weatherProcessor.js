// services/weatherProcessor.js
const WeatherData = require('../models/weatherDataModel');

const processWeatherData = async (data) => {
    // Extract required fields from the response data
    const weatherEntry = new WeatherData({
        city: data.name,
        tempCelsius: data.main.temp - 273.15, // Convert from Kelvin to Celsius
        feelsLike: data.main.feels_like - 273.15, // Convert from Kelvin to Celsius
        tempMin: data.main.temp_min - 273.15, // Convert from Kelvin to Celsius
        tempMax: data.main.temp_max - 273.15, // Convert from Kelvin to Celsius
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        weatherCondition: data.weather[0].main, // Get the main weather condition (e.g., 'Clouds', 'Clear', etc.)
        windSpeed: data.wind.speed,
        windDirection: data.wind.deg,
        timestamp: new Date(data.dt * 1000) // Convert UNIX timestamp to JavaScript Date
    });

    try {
        await weatherEntry.save();
        console.log(`Weather data saved for ${data.name}`);
    } catch (err) {
        console.error(`Error saving weather data for ${data.name}:`, err.message);
    }
};

module.exports = { processWeatherData };
