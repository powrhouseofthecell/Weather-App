// const axios = require('axios');
import axios from 'axios'

const getWeather = url => {
   axios
      .get(url)
      .then(response => {
         // automatically parses json
         const tmp = Math.round(response.data.main.temp - 273.15)
         console.log(
            `temp: ${tmp}, Weather: ${response.data.weather[0].description}, Humidity: ${response.data.main.humidity}, Clouds: ${response.data.clouds.all}, Country: ${response.data.sys.country}`
         )
      })
      .catch(err => {
         if (err.response) {
            console.log(
               `${err.response.data.cod}, ${err.response.data.message}`
            )
         } else {
            console.log(err.message)
         }
      })
}

export default getWeather
