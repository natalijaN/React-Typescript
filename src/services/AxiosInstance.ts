import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173/', 
  timeout: 1000, 
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request:', {
      method: config.method,
      url: config.url,
      headers: config.headers,
      data: config.data,
    });
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {

    console.log('Response:', {
      status: response.status,
      data: response.data,
      headers: response.headers,
    });
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Response Error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
