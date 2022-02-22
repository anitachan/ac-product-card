# ALCH-Product-Card

Este es un paquete de pruebas de despliegue en NPM

## Ana Lucía Chávez

### Ejemplo

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'alch-product-card';
```
```
   <ProductCard
      product={product}
      initialValues={{
        count: 4,
        // maxCount: 10,
      }}
    >
      {({ count, maxCount, isMaxCountReached, increaseBy, reset }) => (
        <>
          <ProductImage/>
          <ProductTitle />
          <ProductButtons />
        </>
      )}
  </ProductCard>

```