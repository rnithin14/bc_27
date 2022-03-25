import axios from 'axios';

export const getAqi = async (latitude: string, longitude: string) => {
  return axios.get(
    `http://18.119.118.9:8090/v1/aqi/${latitude},${longitude}`,
  );
};