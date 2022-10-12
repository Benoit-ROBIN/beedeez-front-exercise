import {axiosInstance} from './axios';

export const stations = (itemNb: number, filter: string) => {
  return axiosInstance.get('stations', {
    params: {
      itemNb: itemNb.toString(),
      filter,
    },
  });
};
