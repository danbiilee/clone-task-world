import axios from 'axios';

export const getTasks = async () => {
  const response = await axios.get('/tasks');
  return response.data;
};

export const getTaskById = async id => {
  const response = await axios.get(`/tasks/${id}`);
  return response.data;
};
