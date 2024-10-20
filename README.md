**Overview:**
This project is a real-time weather monitoring system that continuously fetches weather data from the OpenWeatherMap API for major metro cities in India. The system processes the weather data to generate daily summaries, raise alerts based on user-defined thresholds, and store the data in MongoDB for future analysis. It includes features like daily weather rollups and aggregates, threshold-based alerting, and optional visualizations of weather trends.

**Features :**
Real-Time Data Fetching: Retrieves live weather data from the OpenWeatherMap API for six cities: Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad.
Temperature Conversion: Converts temperature from Kelvin to Celsius (or Fahrenheit, based on user preference).
Daily Weather Rollups: Calculates daily weather summaries including:
Average temperature
Maximum temperature
Minimum temperature
Dominant weather condition
Threshold-Based Alerts: Alerts when certain user-defined thresholds for temperature or weather conditions (e.g., heat alerts) are exceeded.
MongoDB Integration: Stores real-time and daily weather summaries in MongoDB for further analysis and historical tracking.


**Prerequisites :**
To run this project, ensure you have the following installed:

Node.js
MongoDB (either locally or via MongoDB Atlas)
A valid API key from OpenWeatherMap



**Project Structure :**
weather-monitoring-app/
│
├── config/
│   └── db.js                 # MongoDB connection setup
│
├── models/
│   └── weatherDataModel.js    # MongoDB schema/model for weather data
│
├── services/
│   ├── alertService.js        # Alerting service for threshold checking
│   ├── rollups.js             # Daily weather summary and rollup calculations
│   ├── weatherProcessor.js    # Data processing and saving to MongoDB
│   └── weatherService.js      # API fetching and scheduling
│
├── .env                       # Environment variables (API key, MongoDB URI)
├── index.js                   # Main file to initialize the app
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation



**Environment Variables  :**
Create a .env file in the root directory of the project with the following content:

OPENWEATHER_API_KEY=6bc289186f1b0f787aa11f6cd4294507
MONGO_URI=mongodb://localhost:27017/weatherDB


**Running the Application :**
To start the application, use the following command:
node index.js
The system will continuously fetch weather data every 5 minutes for the configured cities, process the data, and save it to MongoDB. You can adjust the interval and cities by modifying the weatherService.js file.



