import axios from 'axios';
const API_KEY = '96687d53d7d3be5cedeb864fe4876f57';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function featchWeather(city){
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);
  return {
    type: FEATCH_WEATHER,
    payload: request
  }
}