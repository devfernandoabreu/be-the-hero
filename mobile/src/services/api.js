import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://192.168.0.16:3333'
});

export default api;