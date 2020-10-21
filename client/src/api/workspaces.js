import axios from 'axios';

export const getWkspaces = async () => {
  const response = await axios.get('/workspaces');
  return response.data.wkspaces;
};
