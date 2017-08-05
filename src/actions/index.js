const API_KEY = '794d48b696b706fba25b85c385b65881';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// store action into a variable, rather than hardcoding the string
// allows us to identify bugs easier
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather () {

  return {
    type: FETCH_WEATHER
  };
}
