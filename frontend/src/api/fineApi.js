import axios from 'axios';

export const getAllUsers = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/admin/users`);
  return response.data;
};

export const getUserFines = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/fines`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
