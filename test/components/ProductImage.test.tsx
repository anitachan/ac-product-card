import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en <ProductImage />', () => {

    it('debe mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(<ProductImage img="/image.jpg" className="custom-style" />);
        //console.log(wrapper.toJSON());
        expect(wrapper.toJSON()).toMatchSnapshot();
      });

      
    it('debe mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => <ProductImage />
                }
            </ProductCard>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});