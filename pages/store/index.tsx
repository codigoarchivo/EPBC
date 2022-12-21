import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../hooks';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';

const StorePage: NextPage = () => {
  const { products, isLoading } = useProducts('/products');
  return (
    <ShopLayout
      title={'epbc-Shop - Home'}
      pageDescription={'Encuentra los mejores productos de epbc aqui'}
    >
      <Typography
        variant='h1'
        component='h1'
      >Tienda</Typography>
      <Typography
        variant='h2'
        sx={{ mb: 1 }}
      >Todos los productos</Typography>
      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList
            // sort random by products 
            products={products.sort(() => 0.5 - Math.random())}
          />
      }
    </ShopLayout>
  )
}
export default StorePage;
