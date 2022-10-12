import {axiosInstance} from './axios';

export const login = (email: string, password: string) => {
  return axiosInstance.post('login', {
    email,
    password,
  });
};

export const register = async (email: string, password: string) => {
  return axiosInstance.post('signup', {
    email,
    password,
  });
};
