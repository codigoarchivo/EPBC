import {
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import { AddTestimonials, TestimonialCard } from "./";
import { testimonials } from '../../database';

export const ScreenAbout = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Flex
        textAlign={"center"}
        pt={10}
        justifyContent={"center"}
        direction={"column"}
        width={"full"}
      >
        <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
          <chakra.h3
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"purple.400"}
          >
            {t('about:aE')}
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700", "gray.50")}
          >
            {t('about:aF')}
          </chakra.h1>
          <chakra.h2
            margin={"auto"}
            width={"70%"}
            fontFamily={"Inter"}
            fontWeight={"medium"}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            {t('about:aG')}{" "}
            <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
              {t('about:aH')}{" "}
            </chakra.strong>{" "}
            {t('about:aI')}
          </chakra.h2>

          {/* AddTestimonials */}
          <AddTestimonials />

        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={"20"}
          mt={16}
          mx={"auto"}
        >
          {/* list testimonials */}
          {testimonials.map((cardInfo, index) => (
            <TestimonialCard {...cardInfo} key={index} />
          ))}
        </SimpleGrid>
        <Box>
          <Icon
            viewBox="0 0 40 35"
            mt={14}
            boxSize={10}
            color={"purple.400"}
            cursor={"pointer"}
          >
            <DownloadIcon />
          </Icon>
        </Box>
      </Flex>
    </>
  );
};

