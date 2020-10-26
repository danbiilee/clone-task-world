import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get(`/projects`);
  return response.data;
};

export const getProjectsByWsId = async id => {
  const response = await axios.get(`/projects/list/${id}`);
  return response.data;
};

export const getProjectById = async id => {
  const response = await axios.get(`/projects/one/${id}`);
  return response.data;
};
