import axios from 'axios';

// Axios configuration
const axiosConfig = {
  baseURL: '12',
  timeout: 30000,
};

// Create an axios instance
const instance = axios.create(axiosConfig);
console.log(instance.defaults.baseURL);


export default instance;