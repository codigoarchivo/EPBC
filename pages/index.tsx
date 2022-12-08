import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Container,
  Stack,
  Button,
  Grid,
  useTheme,
  Typography
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Marquee from 'react-fast-marquee';
import { useProducts } from '../hooks';
import { BaseLayout } from '../components/layouts';
import { ProductCard } from '../components/products';
import { FullScreenLoading } from '../components/ui';
import { COLOR_G1, mediaRes } from '../helper';

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const HomePage: NextPage = () => {
  const { breakpoints } = useTheme();
  const { push, asPath } = useRouter();
  const { products, isLoading } = useProducts('/products');
  const sizeh1 = { xs: 24, md: 40, lg: 50 }


  const queryMedia: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const queryNumber: object[] = [{ xs: 1 }, { sm: 2 }, { md: 3 }, { lg: 4 }, { xl: 4 }];

  const resp = mediaRes(queryMedia, queryNumber);

  return (
    <BaseLayout title={'epbc-Shop - Home'} pageDescription={'Encuentra los mejores productos de epbc aqui'}>

      {
        isLoading
          ? <FullScreenLoading />
          : <Container maxWidth='xl' className='container-pageHome' >
            {/* hero */}
            <Stack
              flexDirection={{ base: "column", md: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
              spacing={{ xs: 5, md: 20 }}
            >
              <Stack
                className='box-shadow'
                width={{ xs: '100%', sm: '60%', md: '45%' }}
                spacing={3}
                sx={{ backgroundColor: 'primary.main' }}
                p={{ xs: 2, sm: 5 }}
              >
                <Typography fontSize={'40px'} variant="h1" component={'h1'} gutterBottom>
                  Visit Our Store
                </Typography>
                <Typography
                  component={'p'}
                  fontSize={'1rem'}
                >
                  Quantum dropshipping offering our energy reprogramming service for your brand, boosting your sales.
                </Typography>
              </Stack>
              <Image
                src={"/img/primary.png"}
                alt="Picture of the author"
                width={450}
                height={500}
                className={'image-hero'}
              />
            </Stack>
            {/* create account */}
            <Stack
              className='box-shadow'
              bgcolor={'primary.main'}
              p={{ xs: 1, sm: 3 }}
              spacing={{ xs: 2, sm: 0 }}
              flexDirection={{ xs: 'column-reverse', sm: 'row' }}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Typography p={{ xs: 2, sm: 0 }}>
                Create An Account To Start Shopping
              </Typography>
              <Button
                size="small"
                color="secondary"
                onClick={() => push(`/auth/register?p=${asPath}`)}
              >
                Create an account
              </Button>
            </Stack>

            {/* Marque */}
            <Container >
              <Stack spacing={10} mt={10}>
                <Typography
                  p={{ xs: 2, sm: 0 }}
                  fontSize={sizeh1}
                  component={'h1'}
                >
                  Tour Of All Our Products
                </Typography>

                <Grid
                  container
                  spacing={0}
                  justifyContent={'space-around'}
                  flexDirection={'column'}
                >

                  <Marquee gradient={false} style={{ height: '420px' }}>
                    {
                      products.map((product, key) => (
                        <ProductCard
                          product={product}
                          key={key}
                          xs={12}
                          sm={12}
                          md={12}
                        />
                      ))
                    }
                  </Marquee>
                </Grid>
              </Stack>
            </Container>

            {/* Carousel */}
            <Container>
              <Stack spacing={10} mt={10} mb={10}>
                <Typography
                  p={{ xs: 2, sm: 0 }}
                  fontSize={sizeh1}
                  component={'h1'}
                >
                  Your last visits to our store
                </Typography>

                <Grid
                  container
                  spacing={0}
                  justifyContent={'center'}
                  flexDirection={'column'}
                  color={COLOR_G1}
                >
                  <Swiper
                    slidesPerView={resp[0].valP}
                    spaceBetween={40}
                    slidesPerGroup={4}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <>
                      {
                        products.map((product, key) => (

                          <SwiperSlide className='swiper__item' key={key}>
                            <ProductCard
                              product={product}
                              xs={12}
                              sm={12}
                              md={12}
                            />
                          </SwiperSlide>

                        ))
                      }
                    </>
                  </Swiper>
                </Grid>
              </Stack>
            </Container>

          </Container>
      }
    </BaseLayout>
  )
}


export default HomePage
