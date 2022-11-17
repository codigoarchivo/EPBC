import Image from "next/image";
import {
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ModeColor } from "../../helpers";

export const ScreenHero = () => {
  const { t } = useTranslation('common');
  const { bordes, modColor } = ModeColor();
  return (
    <>
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={10}
      >
        <VStack
          w={["sx", "sm", "md", "lg", "xl"]}
          border={bordes}
          rounded={"lg"}
          p={{ base: 6, md: 8 }}
          boxShadow={"dark-lg"}
          mb={{ base: 5, md: 0 }}
          backgroundColor={modColor.modelE}
        >
          <Heading w={"full"} fontSize={{ base: 24, md: 40, lg: 50 }} wordBreak={"break-word"}>
            {t('home:hA')}
          </Heading>
          <Text
            fontSize={["sx", "sm", "md", "lg", "xl"]}
            wordBreak={"break-word"}
          >
            {t('home:hB')}
          </Text>
        </VStack>
        <Image
          src={"/img/primary.png"}
          alt="Picture of the author"
          layout="fixed"
          width={useBreakpointValue({ base: 250, md: 400, lg: 450 })}
          height={useBreakpointValue({ base: 300, md: 450, lg: 550 })}
          priority={true}
        />
      </Stack>
    </>
  );
};
