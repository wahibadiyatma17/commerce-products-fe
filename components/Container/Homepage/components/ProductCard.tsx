import React, { FC } from 'react';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import { currencyFormat } from 'utils';

interface BaseProductCardProps {
  title: string;
  description: string;
  price: number;
}

type ProductCardProps = BaseProductCardProps;

const ProductCard: FC<ProductCardProps> = (props) => {
  const { title, description, price } = props;
  return (
    <StyledProductCard>
      <div className="product-image">
        <Image
          fill
          src={'/images/img-product.webp'}
          alt={'image product'}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div tw="flex flex-col items-start gap-2">
        <h4 tw="font-semibold text-base">{title}</h4>
        <span tw="text-sm font-light">{description}</span>
        <h3 tw="font-semibold ">{currencyFormat(price)}</h3>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 9.75rem;
  height: 100%;
  min-height: 21.75rem !important;
  max-height: 21.75rem;
  transition: all 0.3s ease-out;
  padding: 0.25rem 1rem 1rem 1rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 13.125rem;
    min-height: 20rem !important;
    max-height: 22rem;

    :hover {
      background: #ffffff;
      box-shadow: 0rem 0.0625rem 1.25rem rgba(0, 0, 0, 0.1);
      border-radius: 1.25rem;
      transform: scale(1);
    }
  }
  .product-image {
    position: relative;
    border-radius: 1.25rem;
    min-height: 9.75rem;
    max-height: 9.75rem;
    min-width: 9.75rem;
    max-width: 9.75rem;

    > span {
      border-radius: 1.25rem;
    }

    @media (min-width: 1024px) {
      min-height: 12.125rem;
      max-height: 100%;
      min-width: 12.125rem;
      max-width: 100%;
    }
  }

  ${tw`mr-1 lg:(mx-0)`}
`;
