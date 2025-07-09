import axios from 'axios';

// Usa variável de ambiente com fallback opcional
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const api = axios.create({
  baseURL: API_URL,
});

export async function buscarFuncionarios() {
  const resposta = await api.get('/employees');
  return resposta.data;
}
