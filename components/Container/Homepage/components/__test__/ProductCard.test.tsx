import React from 'react';
import { render, screen } from '../../../../../tests/index';
import ProductCard from '../ProductCard';

/**
 * @jest-environment node
 */

const data = {
  title: 'Product title test',
  description: 'Product description test',
  price: 1000000,
};

describe('Product Card Component', () => {
  it('should render title of prodcut card correctly', () => {
    render(<ProductCard title={data.title} description={data.description} price={data.price} />);
    const testTitle = screen.getByText('Product title test');
    expect(testTitle).toBeInTheDocument();
  });

  it('should render description of prodcut card correctly', () => {
    render(<ProductCard title={data.title} description={data.description} price={data.price} />);
    const testTitle = screen.getByText('Product description test');
    expect(testTitle).toBeInTheDocument();
  });

  it('should render price of prodcut card correctly', () => {
    render(<ProductCard title={data.title} description={data.description} price={data.price} />);
    const testTitle = screen.getByText('Rp 1.000.000');
    expect(testTitle).toBeInTheDocument();
  });
});
