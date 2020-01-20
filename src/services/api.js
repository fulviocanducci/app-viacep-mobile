import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/'
});

const getViaCep = async zip => {
  return await api.get(`ws/${zip}/json/`);
};

export { api, getViaCep };
