import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export async function buscarFuncionarios() {
  const resposta = await api.get('/employees'); // endpoint correto
  return resposta.data;
}
