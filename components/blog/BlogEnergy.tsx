import { FC } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Heading,
  HStack,
  Tag,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { ModeColor } from "../../helpers";

interface Props {
  points: object,
  t: any
}

export const BlogEnergy: FC<Props> = ({ points, t }) => {
  const { modColor } = ModeColor();
  return (
    <Container maxW={"7xl"} p={{ base: 0, sm: "12" }}>
      <Heading fontWeight={600} lineHeight={"110%"} fontSize={points}>
        {t('blog:bAa')}{" "}
        <Text as={"span"} color={'brand.50'}>
          {t('blog:bBb')}
        </Text>
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
          style={{ marginBottom: useBreakpointValue({ base: "20px", md: 0 }) }}
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
            textAlign="center"
            display={'flex'}
            justifyContent={'center'}
          >
            <Image
              src={"/img/pendulo.png"}
              alt="energia"
              width={200}
              height={300}
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(brand.900 1px, transparent 1px)",
                "radial(brand.500 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
        >
          <HStack spacing={2} >
            {[t('blog:bCc'), t('blog:bDd'), t('blog:bEe'), t('blog:bFf')].map((tag, key) => {
              return (
                <Tag
                  key={key}
                  bg={modColor.modelC}
                  color={"brand.900"}
                  size={"md"}
                  fontSize={{ base: "8px", md: "16px" }}
                >
                  {tag}
                </Tag>
              );
            })}
          </HStack>
          <Heading marginTop="1">{t('blog:bHh')}</Heading>
          <Text as="p" marginTop="2" fontSize="lg">
            {t('blog:bIi')}
          </Text>
        </Box>
      </Box>
    </Container>
  );
};
