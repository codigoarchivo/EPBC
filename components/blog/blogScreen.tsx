import {
  VStack,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ModeColor } from '../../helpers';
import {
  BlogEnergy,
  BlogWork,
  BlogCant,
  BlogEdgar,
  BlogSalient,
  BlogSome
} from "./";

export const BlogScreen = () => {
  const { t } = useTranslation('common');
  const { modColor, bordes } = ModeColor();
  const points1 = { base: 24, md: 40, lg: 50 };

  return (
    <Stack flexDirection={{ base: "column", lg: "row" }} spacing={0}>
      <VStack
        bg={modColor.modelE}
        mb={{ base: "50px", lg: "0px" }}
        w={{ base: "100%", lg: "75%" }}
        boxShadow={"dark-lg"}
        border={bordes}
        p={{ base: 2, lg: 5 }}
        mr={{ base: 0, lg: 5 }}
      >
        {/* BlogWork */}
        <BlogWork points={points1} t={t} />


        {/* bienvenida */}
        <BlogEdgar t={t} />


        {/* Every day we grow together */}
        <BlogCant t={t} />

        {/* BlogSalient */}
        <BlogSalient points={points1} t={t} />

        {/* Some */}
        <BlogSome points={points1} t={t} />
        
        {/* BlogEnergy */}
        <BlogEnergy points={points1} t={t} />

        {/* BlogEnergy */}
        {/* <BlogEnergy
          bAa={locale === "en-US" ? en.blog.bAa : es.blog.bAa}
          bBb={locale === "en-US" ? en.blog.bBb : es.blog.bBb}
          bCc={locale === "en-US" ? en.blog.bCc : es.blog.bCc}
          bDd={locale === "en-US" ? en.blog.bDd : es.blog.bDd}
          bEe={locale === "en-US" ? en.blog.bEe : es.blog.bEe}
          bFf={locale === "en-US" ? en.blog.bFf : es.blog.bFf}
          bHh={locale === "en-US" ? en.blog.bHh : es.blog.bHh}
          bIi={locale === "en-US" ? en.blog.bIi : es.blog.bIi}
          points={points1}
        /> */}
      </VStack>
      <Stack
        bg={modColor.modelE}
        w={{ base: "100%", lg: "25%" }}
        boxShadow={"dark-lg"}
        height={"min-content"}
        as={"aside"}
        border={bordes}
        p={5}
        position={"relative"}
      >
        {[
          {
            title: t('blog:bJj'),
            text: t('blog:bKk'),
          },
          {
            title: t('blog:bLl'),
            text: t('blog:bMm'),
          },
          {
            title: t('blog:bNn'),
            text: t('blog:bOo'),
          },
        ].map((item, key) => (
          <VStack key={key} w={"full"} p={1} display={"inline-block"}>
            <Heading size={"md"}>{item.title}</Heading>
            <Text>{item.text}</Text>
          </VStack>
        ))}
      </Stack>
    </Stack>
  );
};

