import axios from 'axios';

// A mock function to mimic making an async request for data
export const fetchPlanes = async () => {
  const response = await axios.get('/api/planes/');
  return response.data;
};
