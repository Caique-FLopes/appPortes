import axios from 'axios';

const apiClient =  axios.create({
    baseUrl: 'http://127.0.0.1:5000/api',
    timeout: 1000,
    headers:{'Content-Type': 'application/json'}
});

export default apiClient;