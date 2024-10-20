const WeatherData = require('../models/weatherDataModel');

// Calculate daily weather summary (average, max, min temp and dominant weather condition)
async function calculateDailySummary(date) {
  const startOfDay = new Date(date).setHours(0, 0, 0, 0);
  const endOfDay = new Date(date).setHours(23, 59, 59, 999);

  const weatherRecords = await WeatherData.find({
    timestamp: { $gte: startOfDay, $lte: endOfDay }
  });

  if (!weatherRecords.length) {
    console.log(`No weather records found for ${date.toDateString()}`);
    return;
  }

  const avgTemp = weatherRecords.reduce((sum, record) => sum + record.tempCelsius, 0) / weatherRecords.length;
  const maxTemp = Math.max(...weatherRecords.map(record => record.tempCelsius));
  const minTemp = Math.min(...weatherRecords.map(record => record.tempCelsius));
  const dominantCondition = findDominantCondition(weatherRecords.map(record => record.weatherCondition));

  console.log(`Summary for ${date.toDateString()}: Avg Temp: ${avgTemp}°C, Max Temp: ${maxTemp}°C, Min Temp: ${minTemp}°C, Dominant Condition: ${dominantCondition}`);
}

// Helper function to find the most frequent weather condition
function findDominantCondition(conditions) {
  const frequency = {};
  conditions.forEach(condition => frequency[condition] = (frequency[condition] || 0) + 1);
  return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
}

module.exports = { calculateDailySummary };
