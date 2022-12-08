import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Chip from '@mui/material/Chip';

import { IProduct } from '../../interfaces';
import { Rating, Stack } from '@mui/material';

interface Props {
    product: IProduct,
    xs?: number
    sm?: number
    md?: number
}

export const ProductCard: FC<Props> = ({ product, xs = 11, sm = 5, md = 3 }) => {

    const [isHovered, setIsHovered] = useState(false);

    const [isImageloaded, setIsImageloaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? product.images[1]
            : product.images[0];
    }
        , [isHovered, product.images])

    return (
        <Grid
            item
            xs={xs}
            sm={sm}
            md={md}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={'fadeIn'}
        >

            <Card
                className={'box-shadow'}
                style={{
                    backgroundColor: 'primary.main',
                    height: "405px",
                    width: '250px',
                    marginLeft: 5,
                    marginRight: 5
                }}>
                <div style={{
                    maxHeight: "405px",
                    minHeight: "330px",
                }}
                >
                    <div
                        style={{ height: "250px" }}
                        className={'fadeIn'}
                    >
                        <NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
                            <CardActionArea>
                                {
                                    (product.inStock === 0) && (
                                        <Chip
                                            color='primary'
                                            label='No hay disponible'
                                            sx={{ position: 'absolute', zIndex: 99, top: '10px', left: '10px' }}
                                        />
                                    )
                                }
                                <CardMedia
                                    style={{ width: '250px' }}
                                    className={'fadeIn'}
                                    component={'img'}
                                    image={productImage}
                                    alt={product.title}
                                    onLoad={() => setIsImageloaded(true)}
                                />
                            </CardActionArea>
                        </NextLink>
                    </div>

                    <Stack
                        p={2}
                        spacing={0}
                        sx={{
                            display: isImageloaded ? 'flex' : 'none',
                            justifyContent: 'space-between',
                            height: "155px",
                            backgroundColor: 'primary.main'
                        }}
                        className={'fadeIn'}
                    >
                        <Stack flexDirection={'row'}>
                            <Rating
                                size={'medium'}
                                name="half-rating"
                                defaultValue={4}
                                precision={0.5}
                            />
                            <Typography ml={2} fontWeight={500}>
                                {"0.0"}
                            </Typography>{" "}
                        </Stack>
                        <Stack
                            flexDirection={'row'}
                            textAlign={'left'}
                            justifyContent={'space-between'}
                        >

                            <Typography fontWeight={700}>{product.title}</Typography>
                        </Stack>
                        <Stack flexDirection={'row'} justifyContent={'space-between'}>
                            <Typography fontWeight={500}>${' '}{product.price}</Typography>
                            <ShoppingBagIcon />
                        </Stack>
                    </Stack>
                </div>
            </Card>
        </Grid>
    )
}
