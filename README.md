
# TheSunny Weather App

This is a weather application built using React, Redux, and SSR (Server-Side Rendering) that fetches real-time weather data using the [OpenWeather API](https://openweathermap.org/api). It allows users to search for weather data for cities, display forecasts, and compare cities' weather.

You can view the live version of the project here: [https://jakubmrzyglod.eu/thesunny](https://jakubmrzyglod.eu/thesunny)

## Getting Started

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Glodny03/weather-ssr-app.git
   cd weather-ssr-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Start the server:

   ```bash
   npm start
   ```

### Environment Variable
You will need to create a `.env` file in the root directory of the project with your OpenWeather API key. To do this, add the following line in the `.env` file:

```env
OPENWEATHER_API_KEY=248d369aa6322178f4f2620b2da7f29c
```

The API key is required to fetch weather data for the cities.

### Note:
This project was created as part of a coding test and requires the OpenWeather API to fetch live weather data.

### Used Resources:
- **OpenWeather API**: For fetching weather data.
- **Pexels**: A free photo database that provides images used in the app (used for weather-related visuals).

## Node Version
This project was built and tested on **Node.js version v20.8.1**.
