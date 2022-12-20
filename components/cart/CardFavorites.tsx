import { FC, useContext, useState } from 'react';
import {
    Grid,
    Typography,
    Stack,
    Button,
    CardActionArea,
    CardMedia
} from "@mui/material";
import { ICartProduct, IProduct, ISize } from "../../interfaces";
import { SizeSelector } from "../products";
import { ItemCounter } from "../ui";
import { CartContext } from '../../context';

interface Props {
    favorite: ICartProduct,
}

interface Iinitial {
    size: ISize | undefined;
    quantity: number;
}

const initialState: Iinitial = {
    size: undefined,
    quantity: 5,
}

export const CardFavorites: FC<Props> = ({ favorite }) => {
    const { addProductToCart, deleteFavorite } = useContext(CartContext);
    const [temCartProduct, setTempCartProduct] = useState<Iinitial>(initialState);

    const onAddProduct = () => {
        if (!temCartProduct.size) { return };

        const add = {
            _id: favorite._id,
            image: favorite.image,
            price: favorite.price,
            size: temCartProduct.size,
            slug: favorite.slug,
            title: favorite.title,
            gender: favorite.gender,
            quantity: temCartProduct.quantity
        }

        addProductToCart(add);
        deleteFavorite(add)
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

    const selectDelete = () => {
        // delete selected
        deleteFavorite(favorite)
    }

    return (
        <Grid container spacing={0} justifyContent={'center'}>
            <Grid item xs={10} sm={5} md={2}>
                <CardActionArea>
                    <CardMedia
                        image={favorite.image!}
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
                    <Typography
                        variant={'subtitle1'}
                        component={'h2'}>
                        ${' '}{favorite.price}
                    </Typography>

                    {/* count */}
                    <ItemCounter
                        currentValue={temCartProduct.quantity}
                        updateQuantity={onUpdateQuantity}
                        maxValue={favorite.quantity > 10 ? 10 : favorite.quantity}
                    />

                    {/* size */}
                    <div style={{
                        display: favorite?.sizes !== undefined
                            ? 'block'
                            : 'none'
                    }}>
                        <SizeSelector
                            sizes={favorite.sizes as ISize[]}
                            selectedSize={temCartProduct.size}
                            onSelectedSize={selectedSize}
                        />
                    </div>
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
                        onClick={selectDelete}
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
