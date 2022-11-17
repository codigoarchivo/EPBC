import { Container, VStack } from "@chakra-ui/react";
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Chakra } from '../../Chakra';
import { ShopLayout, BlogEdgar, ScreenAbout } from "../../components";

const AboutPage = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Chakra>
      <ShopLayout title={""} pageDescription={""}>
        <Container maxW={"container.xl"} py={{ base: 0, md: 32 }}>
          <VStack spacing={{ base: 0, md: 20 }}>
            <BlogEdgar />
            <ScreenAbout />
          </VStack>
        </Container >
      </ShopLayout >
    </Chakra>
  );
};



export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale ?? 'en', ['common', 'about', 'major', 'footer']),
  },
})
export default AboutPage;
