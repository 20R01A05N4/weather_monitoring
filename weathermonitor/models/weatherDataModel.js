// models/weatherDataModel.js
const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    city: { type: String, required: true },
    tempCelsius: { type: Number, required: true },
    feelsLike: { type: Number, required: true },
    tempMin: { type: Number, required: true },
    tempMax: { type: Number, required: true },
    pressure: { type: Number, required: true },
    humidity: { type: Number, required: true },
    weatherCondition: { type: String, required: true },
    windSpeed: { type: Number, required: true },
    windDirection: { type: Number, required: true },
    timestamp: { type: Date, required: true }
});

const WeatherData = mongoose.model('WeatherData', weatherDataSchema);

module.exports = WeatherData;
