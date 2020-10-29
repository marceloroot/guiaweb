import axios from 'axios';

const api = axios.create({
  baseURL:'http://guiaalfenas-com-br.umbler.net',
});

export default api;