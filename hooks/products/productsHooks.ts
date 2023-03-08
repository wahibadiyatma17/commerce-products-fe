import { useQuery } from 'react-query';

import { getProducts } from 'services/products/productsServices';
import { productsParamsType } from 'types/productsType';

export const useGetProducts = (params: productsParamsType) => {
  return useQuery(['products', params], () => getProducts(params));
};
