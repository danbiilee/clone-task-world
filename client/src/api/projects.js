import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get('/projects');
  return response.data;
};

export const getProjectById = async id => {
  const response = await axios.get(`/projects/${id}`);
  return response.data;
};
