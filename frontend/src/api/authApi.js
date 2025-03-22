import axios from 'axios';
const API_URL = process.env.REACT_APP_BACKEND_URL;

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  localStorage.setItem('token', response.data.token);
  return response.data;
};
