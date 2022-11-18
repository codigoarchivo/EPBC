import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Container } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { ShopLayout } from '../../components';
import { Chakra } from '../../context';
import { BlogScreen } from '../../components';

const BlogPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Chakra>
      <ShopLayout title={'Blog'} pageDescription={'My blog'}>
        <Container maxW={"container.xs"} px={{ base: 2, md: 4 }}>
          <BlogScreen />
        </Container>
      </ShopLayout>
    </Chakra>
  )

}


export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? 'en', ['common', 'blog', 'major', 'footer']),
  },
})

export default BlogPage;