import { useQuery } from 'react-query';

import { getProducts } from 'services/products/productsServices';

export const useGetProducts = () => {
  return useQuery(['products'], () => getProducts());
};
