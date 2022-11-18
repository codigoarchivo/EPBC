import { FC, ReactElement } from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber
} from "@chakra-ui/react";
import { ModeColor } from "../../helpers";


interface Props {
  title: string,
  stat: number,
  icon: ReactElement,
}
export const StatsCard: FC<Props> = ({ title, stat, icon }) => {
  const { bordes } = ModeColor();
  return (
    <Stat
      px={{ base: 2, md: 3 }}
      py={"5"}
      shadow={"xl"}
      border={bordes}
      rounded={"lg"}
      bg={'brand.900'}
      color={'brand.500'}
    >
      <Flex w={"full"} justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"}>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
};