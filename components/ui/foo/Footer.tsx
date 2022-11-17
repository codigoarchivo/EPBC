import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Breakpoints } from "../../../helpers";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../../utils";
import { ListNavigate } from "../../../utils";
import { NavbarLocal } from '../../../utils/button';
import { ModeColor } from "../../../helpers";

export const Footer = () => {
  const { t } = useTranslation('common');
  const {
    repeat2,
    points3,
    points7,
    points8,
    points11,
    points14
  } = Breakpoints();
  const { bordes, modColor } = ModeColor();
  const { colorMode } = useColorMode();
  return (
    <Container maxW={"full"} px={{ base: 1, sm: 4 }} mt={20} pb={4}>
      <Grid
        templateColumns={repeat2}
        columnGap={points3}
        gridAutoRows={"minmax(50px, auto)"}
        gap={4}
        alignItems={"center"}
        py={3}
        border={bordes}
        boxShadow={"dark-lg"}
        rounded={"lg"}
        backgroundColor={modColor.modelE}
      >
        <GridItem colSpan={points8} px={5}>
          <VStack spacing={5}>
            <Box
              position={"relative"}
              w={200}
              h={41}
              display={"flex"}
              alignItems={"center"}
            >
              <Image
                src={`/img/${colorMode === "dark" ? "logo" : "logob"}.png`}
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
                priority={true}
              />
            </Box>
            <Text fontSize={"sm"} textTransform={"capitalize"}>
              © {new Date().getFullYear()}{" "}
              {t('footer:fA')}
            </Text>
            <List display="flex" alignItems={"center"}>
              <ListItem mr={3}>
                <Link
                  href="https://www.facebook.com/edgar.marcanosantodomingo"
                  target={"_blank"}
                  rel="noreferrer"
                  isExternal
                >
                  <Button as={"span"} size="xs" px={0} variant={"tertiary"}>
                    <FacebookIcon boxSize={points11} />
                  </Button>
                </Link>
              </ListItem>
              <ListItem mx={3}>
                <Link
                  href="https://www.instagram.com/p/CYcsvrVgEC5/?utm_medium=share_sheet"
                  target={"_blank"}
                  rel="noreferrer"
                  isExternal
                >
                  <Button as={"span"} size="xs" px={0} variant={"tertiary"}>
                    <InstagramIcon boxSize={points11} />
                  </Button>
                </Link>
              </ListItem>
              <ListItem ml={3}>
                <Link
                  href="https://twitter.com/edgarspendulum?t=PmWj-xl1JJ407GU2Lk8wDg&s=09"
                  target={"_blank"}
                  rel="noreferrer"
                  isExternal
                >
                  <Button as={"span"} size="xs" px={0} variant={"tertiary"}>
                    <TwitterIcon boxSize={points11} />
                  </Button>
                </Link>
              </ListItem>
            </List>
          </VStack>
        </GridItem>
        <GridItem colSpan={points7}>
          <Stack
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems={"center"}
            spacing={0}
          >
            <List px={points14} py={5} w="full" spacing={1}>
              <VStack spacing={5}>
                <Heading w="full" size={"sm"} textTransform={"uppercase"}>
                  {t('footer:fB')}
                </Heading>
                <ListItem w="full">
                  <Text>Tel +1 9735108452</Text>
                </ListItem>
                <ListItem w="full">
                  <Text>
                    {" "}
                    {t('footer:fC')}
                  </Text>
                </ListItem>
              </VStack>
            </List>
            <List px={points14} py={5} w="full" spacing={1}>
              <ListNavigate Divi={ListItem} />
            </List>
          </Stack>
        </GridItem>
      </Grid>
      <Box px={{ base: 3, sm: 10 }}>
        <NavbarLocal />
      </Box>
    </Container>
  );
};
