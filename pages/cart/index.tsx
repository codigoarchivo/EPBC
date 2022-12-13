import { useEffect, useContext } from 'react';
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
import { CartContext } from '../../context';
import { CardList, } from '../../components/cart';
import Cookies from 'js-cookie';

const CardPage = () => {
    const favorite = Cookies.get('favorite') ? JSON.parse(Cookies.get('favorite')!) : [];
    const { isLoaded, cart } = useContext(CartContext);
    const { replace } = useRouter();

    useEffect(() => {
        if (isLoaded && cart.length === 0 && favorite.length === 0) {
            replace('/cart/empty');
        };
    }, [isLoaded, cart, replace]);

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

                <Stack spacing={3}>
                    <Typography variant={'h1'} component={'h1'}>
                        Añadidos recientemente a la lista de deseos
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <CardList editable={false} favorite={favorite} />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button
                                color='secondary'
                                className='circular-btn'
                                fullWidth

                            >
                                agregar
                            </Button>
                            <Button
                                color='secondary'
                                className='circular-btn'
                                fullWidth

                            >
                                quitar
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>

        </ShopLayout>
    )
}

export default CardPage