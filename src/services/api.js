import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/thiagorpereira/style-shoes-react',
});

export default api;
