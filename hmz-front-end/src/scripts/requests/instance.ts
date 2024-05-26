import axios from 'axios';

// Axios configuration
const axiosConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_IP,
  timeout: 30000,
};

// Create an axios instance
const instance = axios.create(axiosConfig);
console.log(instance.defaults.baseURL);


export default instance;