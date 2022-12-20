import { useEffect, useContext, useMemo } from 'react';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ShopLayout } from '../../components/layouts';
import { CardFavorites, CardList, } from '../../components/cart';
import { CartContext } from '../../context';

const CardPage = () => {
    const { replace } = useRouter();
    const { isLoaded, cart, favorites } = useContext(CartContext);

    useEffect(() => {
        if (
            isLoaded &&
            cart.length === 0 &&
            favorites.length === 0
        ) {
            replace('/cart/empty');
        };
    }, [
        isLoaded,
        cart,
        replace,
        favorites
    ]);


    if (!isLoaded) {
        return (<></>);
    };

    return (
        <ShopLayout title={'Carrito - 3'} pageDescription={'Carrito de compras de la tienda'}>
            <Stack spacing={20}>
                <Stack spacing={3}>
                    <Typography variant={'h1'} component={'h1'}>
                        Carrito
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={7}>
                            <CardList editable />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Card className={'summary-card '}>
                                <CardContent>
                                    <Stack spacing={5}>
                                        <Typography variant='h2'>Orden</Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <NextLink
                                            href={'/checkout/address'}
                                            as={'/checkout/address'}
                                            passHref
                                        >
                                            <Button
                                                color='secondary'
                                                className='circular-btn'
                                                fullWidth

                                            >
                                                Checkout
                                            </Button>
                                        </NextLink>

                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>

                <Stack spacing={8} display={!!favorites[0] ? 'flex' : 'none'}>
                    <Typography variant={'h1'} component={'h1'}>
                        Añadidos recientemente a la lista de deseos
                    </Typography>
                    <Stack spacing={5}>

                        {
                            favorites?.map((favorite, key) => (
                                <CardFavorites favorite={favorite} key={key} />
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>

        </ShopLayout>
    )
}

export default CardPage