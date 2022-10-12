import axios from 'axios';

const API_URL = 'http://localhost:3002/';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const login = (email: string, password: string) => {
  return axiosInstance.post('login', {
    email,
    password,
  });
};
