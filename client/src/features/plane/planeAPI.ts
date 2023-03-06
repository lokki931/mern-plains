import axios from 'axios';

// A mock function to mimic making an async request for data
export const createPlane = async (data: FormData) => {
  const response = await axios.post('/api/planes/', data);
  return response.data;
};

export const getPlane = async (id: string) => {
  const response = await axios.get('/api/planes/' + id);
  return response.data;
};
