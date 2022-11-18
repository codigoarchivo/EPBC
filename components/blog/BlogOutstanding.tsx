import { FC } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { ModeColor } from "../../helpers";
import { SomeButton } from "../../utils";

interface Props {
  item: any;
  t: any;
}

export const BlogOutstanding: FC<Props> = ({ item, t }) => {
  const { locale } = useRouter();
  const { bordes } = ModeColor();

  return (
    <Box
      maxW={{ base: "240px", sm: "470px", lg: "240px" }}
      w={"full"}
      boxShadow={"dark-lg"}
      rounded={"lg"}
      overflow={"hidden"}
      border={bordes}
      bg={"brand.900"}
      color={"brand.500"}
    >
      <Stack
        w={"full"}
        textAlign={"center"}
        p={{ base: 3, md: 6 }}
        align={"center"}
        spacing={10}
      >
        <Text
          bg={"brand.500"}
          color={"brand.900"}
          fontSize={"sm"}
          fontWeight={500}
          w={"full"}
          p={2}
          px={3}
          rounded={"full"}
        >
          {item?.na[locale === 'en' ? 'en' : 'es']!}
        </Text>
        <Heading size={"md"}>{t('blog:bI')}</Heading>
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <Text fontSize={"6xl"} fontWeight={100}>
            {item?.pr}
          </Text>
        </Stack>
        <Box>
          <SomeButton
            backgroundColor={"brand.500"}
            color={"brand.900"}
            w={"full"}
            href={`/search/[id]`}
            as={`/search/${item.id}`}
            name={t('blog:bI')}
            boxShadow={"dark-lg"}
          />
        </Box>
      </Stack>
    </Box>
  );
};
