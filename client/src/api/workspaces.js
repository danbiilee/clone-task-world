import axios from 'axios';

export const getWkspaces = async () => {
  const response = await axios.get('/workspaces');
  return response.data;
};

export const getWkspaceById = async id => {
  const response = await axios.get(`/workspaces/${id}`);
  return response.data;
};
