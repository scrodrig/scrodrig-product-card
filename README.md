# scrodrig-product-card

This is a code for testing purposes only

## Example

```tsx
import { ProductCard } from 'scrodrig-product-card';
```

```tsx
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductCard.Image
        style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
      />
      <ProductCard.Title title={'Coffee'} />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```

```tsx
<ProductCard
  style={{ width: '100px' }}
  product={product}
  className="bg-dark text-white"
  onChange={()=>{}}
  value={product.count}
>
  <ProductCard.Image
    className="custom-image"
    style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
  />
  <ProductCard.Buttons
    className="custom-buttons"
    style={{ display: 'flex', justifyContent: 'center' }}
  />
</ProductCard>
```
