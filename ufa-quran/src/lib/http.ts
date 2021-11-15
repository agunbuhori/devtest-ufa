import axios from 'axios';

const http = axios.create({
  baseURL: 'https://api.alquran.cloud/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default http;
