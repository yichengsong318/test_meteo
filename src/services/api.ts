import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_THE_GRAPH_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;
