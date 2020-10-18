import axios from 'axios';

export const signup = async member => {
  const response = await axios.post('/members/signup', member);
  return response.data;
};

export const login = async member => {
  const response = await axios.post('/members/login', member);
  return response.data;
};

export const logout = async () => {
  const response = await axios.get('/members/logout');
  return response.data;
};

export const getLoginUser = async () => {
  const response = await axios.get('/members');
  return response.data;
};
