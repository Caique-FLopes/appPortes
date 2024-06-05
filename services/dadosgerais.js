import axios from 'axios';

const apiClient =  axios.create({
    baseURL: 'http://localhost:5000/api/dados',
    timeout: 5000,
    headers:{'Content-Type': 'application/json'},
     //withCredentials: true
});

export default apiClient;