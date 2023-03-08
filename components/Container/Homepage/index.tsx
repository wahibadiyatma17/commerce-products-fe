import React, { FC, useMemo, useState } from "react";
import { Input } from "alceo-design";
import { BiSearch as SearchIcon } from "react-icons/bi";
import { useDebounce } from "usehooks-ts";
import tw, { styled } from "twin.macro";

import { useGetProducts } from "hooks/products/productsHooks";
import ProductCard from "./components/ProductCard";
import { productDataProps } from "types/productsType";

const Homepage: FC = () => {
  const [value, setValue] = useState<string>("");

  // use debounce search to prevent hitting a lot API on every keystroke change.
  const debouncedSearch = useDebounce(value, 500);

  const params = {
    title: debouncedSearch,
  };

  const { data: productsRes, isLoading: isProductsLoading } = useGetProducts(params);
  const productsData = useMemo(() => productsRes?.data ?? [], [productsRes]);

  return (
    <div tw="flex flex-col w-full h-full min-h-screen items-center max-w-[1366px] mx-auto gap-8 py-10 px-[4.5rem]">
      <h4 tw="font-semibold text-xl">Daftar Produk</h4>
      <StyledSearchInput>
        <Input id="filterGlobal" type="text" placeholder="Cari Produk" suffix={<SearchIcon />} defaultValue={value} onChange={(e) => setValue(e?.target?.value)} />
      </StyledSearchInput>
      <div tw="flex gap-8 flex-wrap max-w-[80%] items-center justify-center">
        {productsData.map((data: productDataProps, idx: number) => (
          <ProductCard title={data.title} price={data.price} description={data.description} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

const StyledSearchInput = styled.div`
  width: 100%;
  max-width: 35rem;

  .suffix-container {
    font-size: 1.5rem !important;
  }

  @media (max-width: 768px) {
    .input-wrapper {
      height: 2.5rem;

      input {
        font-size: 0.75rem !important;
      }
    }
  }
`;
