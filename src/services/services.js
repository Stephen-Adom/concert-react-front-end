import axios from 'axios';
import localforage from 'localforage';

const BASEURL = 'http://localhost:4000/api/v1';

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const regiserUser = async (userData) => {
  const response = await axiosInstance.post('/register', JSON.stringify(userData));
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axiosInstance.post('/login', JSON.stringify(userData));
  return response.data;
};

export const fetchAllConcerts = async () => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/concerts');
  return response.data;
};

export const fetchConcert = async (id) => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.get(`/concerts/${id}`);
  return response.data;
};

export const reserveConcert = async (postBody) => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.post('/reservations', JSON.stringify(postBody));
  return response.data;
};

export const createConcert = async (postBody) => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.post('/concerts', JSON.stringify(postBody));
  return response.data;
};

export const adminAllConcert = async () => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/all_concerts');
  return response.data;
};

export const deleteConcert = async (id) => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  axiosInstance.defaults.headers.common['X-Permitted-Cross-Origin'] = '*';
  const response = await axiosInstance.delete(`/concerts/${id}`);
  return response.data;
};

export const fetchAllUserReservations = async () => {
  const token = await localforage.getItem('token');
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axiosInstance.get('/reservations');
  return response.data;
};
