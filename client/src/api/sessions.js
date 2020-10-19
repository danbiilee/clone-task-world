import axios from 'axios';

export const getLoginUser = async () => {
  const response = await axios.get('/sessions/user');
  return response.data;
};
