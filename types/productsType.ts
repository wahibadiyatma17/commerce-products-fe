export type productsParamsType = {
  id?: string | number;
  title?: string;
};

export type productDataProps = {
  id: string | number;
  title: string;
  price: number;
  description: string;
  created_at?: null;
  updated_at?: null;
};
