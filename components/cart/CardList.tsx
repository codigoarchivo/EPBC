import { FC, useContext } from 'react';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { ItemCounter } from '../ui';
import { CartContext } from '../../context';
import { ICartProduct, IOrdersItem } from '../../interfaces';

interface Props {
    editable?: boolean,
    products?: IOrdersItem[],
    favorite?: IOrdersItem[],
}

export const CardList: FC<Props> = ({ editable = false, products, favorite = [] }) => {
    const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

    const onNewQuantityValue = (product: ICartProduct, onNewQuantityValue: number) => {
        product.quantity = onNewQuantityValue;
        updateCartQuantity(product)
    };

    const productOrFavorite = products || favorite;
    const productsToShow = !!productOrFavorite ? productOrFavorite : cart;

    return (
        <>
            {
                productsToShow.map((product: any) => (
                    <Grid container key={product.slug + product.size} >
                        <Grid item xs={3}>
                            <NextLink href={`/product/${product.slug}`} passHref>
                                <Box>
                                    <CardActionArea>
                                        <CardMedia
                                            image={product.image}
                                            component='img'
                                            sx={{ borderRadius: '5px' }}
                                        />
                                    </CardActionArea>
                                </Box>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display={'flex'} flexDirection={'column'}>
                                <Typography variant='body1'>{product.title}</Typography>
                                <Typography
                                    variant='body1'>Talla:
                                    <strong>
                                        {
                                            favorite.length > 0
                                                ? product.size!.join(", ")
                                                : product.size
                                        }</strong>
                                </Typography>
                                {
                                    editable
                                        ? (
                                            <ItemCounter
                                                currentValue={product.quantity}
                                                maxValue={10}
                                                updateQuantity={(value) => onNewQuantityValue(product as ICartProduct, value)}
                                            />
                                        )
                                        : (
                                            <Typography variant='h5'>
                                                {product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}
                                            </Typography>
                                        )
                                }
                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>${' '}{product.price}</Typography>
                            {
                                editable && (
                                    <Button
                                        onClick={() => removeCartProduct(product as ICartProduct)}
                                        variant='text'
                                        color='secondary'
                                    >Remover</Button>
                                )
                            }

                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}
