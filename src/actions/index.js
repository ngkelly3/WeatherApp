import axios from 'axios';

const API_KEY = '794d48b696b706fba25b85c385b65881';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// store action into a variable, rather than hardcoding the string
// allows us to identify bugs easier
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  // this is from the API documentation on generating the API call, restricted to US cities
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // returns a promise, but right now the request is the payload

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
