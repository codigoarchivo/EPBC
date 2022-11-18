import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { ModeColor } from "../../helpers";
import { Arrow, SomeButton } from "../../utils";

interface Props {
  points: object,
  t: any,
}

export const BlogWork: FC<Props> = ({ points, t }) => {
  const { bgColor } = ModeColor();

  return (
    <Stack
      w={"full"}
      minH={{ base: "40vh", md: "50vh" }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack
        flex={1}
        align={"center"}
        justify={"center"}
        spacing={6}
        w={"full"}
        maxW={"lg"}
      >
        <Heading fontSize={points} w={"full"}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: useBreakpointValue({ base: "20%", md: "30%" }),
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: bgColor.bg7,
              zIndex: -1,
            }}
          >
            {t('blog:bA')}
          </Text>
          <br /> <Text>{t('blog:bB')}</Text>{" "}
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }}>{t('blog:bC')}</Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          position={"relative"}
        >
          <SomeButton
            rounded={"full"}
            variant={"primary"}
            href={`/auth/create`}
            as={`/auth/create`}
            name={t('create')}
          />
          <Box right={20} display={{ base: "none", md: "block" }}>
            <Icon
              as={Arrow}
              color={useColorModeValue("gray.500", "gray.300")}
              w={"100px"}
              position={"absolute"}
              left={"150px"}
              top={"30px"}
            />
            <Text
              fontSize={"lg"}
              fontFamily={"Caveat"}
              position={"absolute"}
              left={"170px"}
              top={"-10px"}
              transform={"rotate(10deg)"}
            >
              {t('blog:bD')}
            </Text>
          </Box>
        </Stack>
      </Stack>

      <Flex
        flex={1}
        w={"100%"}
        h={"auto"}
        position={"relative"}
        display={{ base: "none", md: "flex" }}
      >
        <Image
          src={"/img/secondary.png"}
          alt="Hero"
          layout="fill"
          objectFit="contain"
          priority={true}
        />
      </Flex>
    </Stack>
  );
};

