import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product1, product2 } from '../data/products';

describe('ProductImage', () => {
  test('should show the component right with the snapshot', () => {
    const wrapper = renderer.create(
      <ProductImage img='https://hola.jpg' className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component right with no image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductImage img='https://hola.jpg' />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component right with image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage  />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
