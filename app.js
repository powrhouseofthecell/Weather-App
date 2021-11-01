import getWeather from './utils/open-weather.js';
import dotenv from 'dotenv';
dotenv.config();

const cityName = process.argv[2];

if (!cityName) console.log('Please provide a city name!');
else {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}`;
   getWeather(url);
}
