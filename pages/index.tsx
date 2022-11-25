import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Container,
  Stack,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Typography
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import Marquee from 'react-fast-marquee';
import { useProducts } from '../hooks';
import { BaseLayout } from '../components/layouts';
import { ProductCard } from '../components/products';
import { FullScreenLoading } from '../components/ui';
import { COLOR_G1 } from '../helper';


const HomePage: NextPage = () => {
  const { breakpoints } = useTheme();
  const { push, asPath } = useRouter();
  const { products, isLoading } = useProducts('/products');
  const sizeh1 = { xs: 24, md: 40, lg: 50 }


  const data = ['xs', 'sm', 'md', 'lg', 'xl'];
  const port = [{ xs: 1 }, { sm: 2 }, { md: 3 }, { lg: 4 }, { xl: 4 }];

  let d: any = [];

  data.map((item: any) => {
    d.length === 2 ? d.shift() : d;
    const c = useMediaQuery(item.startsWith('md') ? breakpoints.up(item) : breakpoints.up(item))
    if (data.includes(item) && c) {
      d.push({
        valB: c,
        valS: item,
        valP: Object.values(port.filter((n: any) => n[item])[0])[0]
      })
    }
  });

  return (
    <BaseLayout title={'epbc-Shop - Home'} pageDescription={'Encuentra los mejores productos de epbc aqui'}>

      {
        isLoading
          ? <FullScreenLoading />
          : <Container maxWidth='lg' className='container-pageHome' >
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
                layout="fixed"
                width={450}
                height={500}
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
            <Stack spacing={10} mt={10}>
              {/* Marquee */}
              <Typography
                p={{ xs: 2, sm: 0 }}
                fontSize={sizeh1}
                component={'h1'}
              >
                Tour Of All Our Products
              </Typography>

              <Grid
                container
                spacing={3}
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

            {/* Carousel */}
            <Stack spacing={10} mt={10} mb={10}>
              {/* Marquee */}
              <Typography
                p={{ xs: 2, sm: 0 }}
                fontSize={sizeh1}
                component={'h1'}
              >
                Tour Of All Our Products
              </Typography>

              <Grid
                container
                spacing={3}
                justifyContent={'center'}
                flexDirection={'column'}
                color={COLOR_G1}
              >
                <Swiper
                  slidesPerView={d[0].valP}
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

                        <SwiperSlide key={key}>
                          <ProductCard
                            product={product}
                            xs={1}
                            sm={1}
                            md={1}
                          />
                        </SwiperSlide>

                      ))
                    }
                  </>

                </Swiper>
              </Grid>
            </Stack>
          </Container>
      }
    </BaseLayout>
  )
}


export default HomePage
