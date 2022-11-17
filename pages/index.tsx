import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { ShopLayout } from '../components/layouts';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Chakra } from '../Chakra';
import { Home } from '../components';

const HomePage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Chakra>
      <ShopLayout title={'Home pague'} pageDescription={'Encuentra los mejores productos de teslo aqui en brandchakras'}>
        <Home />
      </ShopLayout>
    </Chakra>
  )

}


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? 'en', ['common', 'home', 'major', 'footer']),
  },
})

export default HomePage;