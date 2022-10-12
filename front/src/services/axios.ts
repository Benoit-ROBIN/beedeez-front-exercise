import axios from 'axios';

const API_URL = 'http://localhost:3002/';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});
