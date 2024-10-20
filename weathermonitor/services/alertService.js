let lastAlertTime = null;

function checkForAlerts(weatherData, alertConfig) {
  const { tempCelsius } = weatherData;
  const { thresholdTemp, cooldownMinutes } = alertConfig;

  if (tempCelsius > thresholdTemp) {
    const now = new Date();
    if (!lastAlertTime || (now - lastAlertTime) / (1000 * 60) > cooldownMinutes) {
      triggerAlert(weatherData);
      lastAlertTime = now;
    }
  }
}

function triggerAlert(weatherData) {
  console.log(`ALERT: Temperature in ${weatherData.city} exceeded threshold: ${weatherData.tempCelsius}°C`);
  // You can extend this to send email notifications or other alerts.
}

module.exports = { checkForAlerts };
