import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
