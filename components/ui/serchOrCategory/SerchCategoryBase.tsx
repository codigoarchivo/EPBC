import { Stack } from "@chakra-ui/react";
import { MenuCategory, SerchData } from '.';

export const SerchCategoryBase = () => {
  return (
    <Stack
      direction={"row"}
      spacing={4}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      {/* Category */}
      <MenuCategory />

      {/* SerchData */}
      <SerchData />
    </Stack>
  );
};
