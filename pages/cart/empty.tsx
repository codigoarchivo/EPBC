import NextLink from 'next/link';
import RemoveShoppingCartOutlined from '@mui/icons-material/RemoveShoppingCartOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ShopLayout } from '../../components/layouts';




const EmptyPage = () => {
    return (
        <ShopLayout title={'Carrito vacio'} pageDescription={'No hay articulos en el carrito de compras'}>
            <Box display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'center'} alignItems={'center'} height={'calc(100vh - 200px)'}>
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Typography>
                        Su carrito esta vacio
                    </Typography>
                    <NextLink href='/' passHref>
                        <Box typography={'h4'} color={'secondary'}>
                            Regresar
                        </Box>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage;