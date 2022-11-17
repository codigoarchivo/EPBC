import { useColorModeValue } from "@chakra-ui/react";

export const ModeColor = () => {
  const bordes = useColorModeValue(
    "1px solid brand.800",
    "1px solid brand.900"
  );
  const textError = useColorModeValue("red.600", "red.300");
  const bgText = useColorModeValue("gray.800", "white");
  const bgTextError = useColorModeValue("white", "gray.800");

  const modColor = {
    modelA: useColorModeValue("brand.900", "brand.800"),
    modelB: useColorModeValue("brand.800", "brand.900"),
    modelC: useColorModeValue("brand.800", "brand.800"),
    modelD: useColorModeValue("brand.900", "brand.900"),
    modelE: useColorModeValue("brand.500", "brand.300"), //este fondo
    modelF: useColorModeValue("brand.900", "brand.500"), //este
  };

  const bgColor = {
    bg1: useColorModeValue("brand.400", "brand.300"),
    bg2: useColorModeValue("blackAlpha.700", "whiteAlpha.50"),
    bg3: useColorModeValue("white", "gray.800"),
    bg4: useColorModeValue("yellow.100", "brand.600"),
    bg5: useColorModeValue("brand.600", "brand.200"),
    bg6: useColorModeValue("brand.200", "brand.600"),
    bg7: useColorModeValue("brand.200", "brand.300"),
  };

  return {
    bordes,
    bgColor,
    modColor,
    textError,
    bgTextError,
    bgText,
  };
};
