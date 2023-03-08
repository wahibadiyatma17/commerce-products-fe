import axios, { AxiosRequestConfig } from 'axios';
import { productsParamsType } from 'types/productsType';
import productsEndpoint from './productsEndpoint';

export const getProducts = (params: productsParamsType) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  } as AxiosRequestConfig;
  return axios.get(productsEndpoint.products, options);
};
