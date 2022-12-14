import { FC } from "react"

import Grid from '@mui/material/Grid';

import { IProduct } from "../../interfaces";

import { ProductCard } from "./";

interface Props {
    products: IProduct[]
}

export const ProductList: FC<Props> = ({ products }) => {
    return (
        <Grid container spacing={6} justifyContent={'space-around'}>
            {
                products.map((product) => (
                    <ProductCard key={product.slug} product={product} />
                ))
            }
        </Grid>
    )
}
