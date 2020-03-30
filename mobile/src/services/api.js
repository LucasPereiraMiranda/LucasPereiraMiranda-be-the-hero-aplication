import axios from 'axios';

// setar o ip do computador, e nao o localhost (olhar no expo)
const api = axios.create({
    baseURL: 'http://192.168.0.103:333',
});

export default api;
