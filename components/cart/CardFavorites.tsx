import { FC, useContext, useState } from 'react';
import {
    Grid,
    Typography,
    Stack,
    Button,
    CardActionArea,
    CardMedia
} from "@mui/material";
import Cookies from 'js-cookie';
import { ICartProduct, ISize } from "../../interfaces";
import { SizeSelector } from "../products";
import { ItemCounter } from "../ui";
import { CartContext } from '../../context';

interface Props {
    favorites: ICartProduct[],
    favorite: ICartProduct,
}

const initialState: ICartProduct = {
    _id: '',
    image: '',
    price: 0,
    size: undefined,
    slug: '',
    title: '',
    gender: 'men',
    quantity: 5,
}

export const CardFavorites: FC<Props> = ({ favorite, favorites }) => {
    const { addProductToCart } = useContext(CartContext);

    const [temCartProduct, setTempCartProduct] = useState<ICartProduct>(initialState);

    const onAddProduct = () => {
        if (!temCartProduct.size) { return };
        addProductToCart(temCartProduct);

        const deleteFavorite = favorites.filter((item) => !item._id.startsWith(temCartProduct._id));
        if (deleteFavorite.length === 0) {
            Cookies.remove('favorite');
            setTempCartProduct(initialState);
            return;
        }

        Cookies.set('favorite', JSON.stringify(deleteFavorite));
        setTempCartProduct(initialState);
    };

    const selectedSize = (size: ISize) => {
        setTempCartProduct(currentProduct => ({
            ...currentProduct,
            size: size.toString() as ISize,
        }));
    };

    const onUpdateQuantity = (quantity: number) => {
        setTempCartProduct(currentProduct => ({
            ...currentProduct,
            quantity
        }));
    };

    return (
        <Grid container spacing={0} justifyContent={'center'}>
            <Grid item xs={10} sm={5} md={2}>
                <CardActionArea>
                    <CardMedia
                        image={favorite.image}
                        component='img'
                        sx={{ borderRadius: '5px' }}
                    />
                </CardActionArea>
            </Grid>
            <Grid item xs={12} sm={8} md={7}>
                <Stack spacing={2} px={4}>
                    <Typography
                        variant={'h1'}
                        component={'h1'}
                        fontSize={'1.4rem'}
                    >{favorite.title}</Typography>
                    <Typography variant={'subtitle1'} component={'h2'}>${' '}{favorite.price}</Typography>

                    {/* count */}
                    <ItemCounter
                        currentValue={temCartProduct.quantity}
                        updateQuantity={onUpdateQuantity}
                        maxValue={favorite.quantity > 10 ? 10 : favorite.quantity}
                    />

                    {/* size */}
                    <SizeSelector
                        sizes={favorite.sizes as ISize[]}
                        selectedSize={temCartProduct.size}
                        onSelectedSize={selectedSize}
                    />
                </Stack>
            </Grid>
            <Grid item xs={12} sm={8} md={2}>
                <Stack spacing={2} >
                    <Button
                        onClick={onAddProduct}
                        color='primary'
                        className='circular-btn'
                        fullWidth

                    >
                        Agregar
                    </Button>
                    <Button
                        color='primary'
                        className='circular-btn'
                        fullWidth

                    >
                        Quitar
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}
