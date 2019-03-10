import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://pleap.herokuapp.com/api',
  withCredentials: true
});
