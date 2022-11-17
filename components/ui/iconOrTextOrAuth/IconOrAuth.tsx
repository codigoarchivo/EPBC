import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { ModeColor } from '../../../helpers';
import { IIconOrAuthOrText } from '../../../interfaces';
import { SomeButton } from '../../../utils';


export const IconOrAuth: FC<IIconOrAuthOrText> = ({
  HrefA,
  NameA,
  ValueA,
  DisplayA,
  WidthA,
  TopA,
  IndexA,
  IndexB,
  RightA,
  HeightA,
}) => {
  const { modColor, bordes } = ModeColor();

  return (
    <Box position={"relative"}>
      <SomeButton
        fontSize={{ base: "xs", md: "1rem" }}
        px={0}
        variant={"tertiary"}
        href={HrefA}
        name={NameA}
        position={"relative"}
        zIndex={IndexB}
      />

      <Text
        backgroundColor={modColor.modelF}
        color={modColor.modelB}
        display={DisplayA}
        right={RightA}
        zIndex={IndexA}
        top={TopA}
        border={bordes}
        position={"absolute"}
        textAlign={"center"}
        borderRadius={"full"}
        w={WidthA}
        h={HeightA}
        fontWeight={"bold"}
        fontSize={{ base: "x-small", sm: "smaller" }}
      >
        {ValueA}
      </Text>
    </Box>
  )
}
