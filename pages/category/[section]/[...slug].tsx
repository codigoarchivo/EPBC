import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { ShopLayout } from '../../../components/layouts';
import { ProductList } from '../../../components/products';
import { FullScreenLoading } from '../../../components/ui';
import { useProducts } from '../../../hooks';

const CategoryPage: NextPage = () => {
    const { query: { slug = [] } } = useRouter();
    const { products, isLoading } = useProducts(`/products?${slug[1]}=${slug[0]}`);
    return (
        <ShopLayout
            title={`epbc-Shop - ${slug[0]}`}
            pageDescription={`Encuentra los mejores productos de epbc para ${slug[0]}`}
        >
            <Typography
                variant='h1'
                component='h1'
            >
                {slug[0]}
            </Typography>
            <Typography
                variant='h2'
                sx={{ mb: 1 }}
            >
                {` Productos para ${slug[0]}`}
            </Typography>
            {
                isLoading
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }
        </ShopLayout>
    )
}

export default CategoryPage;