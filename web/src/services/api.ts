import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-deploy-beckend.herokuapp.com'
});

export default api;