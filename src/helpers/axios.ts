import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://api.weatherapi.com/',
  timeout: 30000,
  // headers: {
  //   "X-Requested-With": "XMLHttpRequest",
  // },
});

export const sendGet = (url: string = '') => axiosInstance
  .get(url)
  .then((res) => res);
export const sendPost = (url: string = '', params: any, queryParams: any) => axiosInstance
  .post(url, params, { params: queryParams, timeout: queryParams?.timeout })
  .then((res) => res);
export const sendPut = (url: string = '', params: any) => axiosInstance
  .put(url, params)
  .then((res) => res);
export const sendPatch = (url: string = '', params: any) => axiosInstance
  .patch(url, params)
  .then((res) => res);
export const sendDelete = (url: string = '', params: any) => axiosInstance
  .delete(url, { data: params })
  .then((res) => res);
