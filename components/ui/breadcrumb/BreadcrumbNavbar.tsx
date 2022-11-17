import { Box, chakra, Stack } from "@chakra-ui/react";
import { ModeColor } from "../../../helpers/ModeColor";
import { ListNavigate } from "../../../utils";
import { MenuHistory } from "./";

export const BreadcrumbNavbar = () => {
  const { bordes, modColor } = ModeColor();
  const a = { rol: 'owner' }
  return (
    <Box
      boxShadow={"lg"}
      backgroundColor={modColor.modelE}
      display={{ base: "none", lg: "block" }}
      mb={10}
      borderTop={bordes}
    >
      <nav>
        <Stack
          spacing={0}
          as={"ul"}
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          py={2}
        >

          {/* ListNavigate */}
          <ListNavigate Divi={chakra.li} />
          <chakra.li
            display={a.rol === "owner" || a.rol === "user" ? "block" : "none"}
          >
            <MenuHistory />
          </chakra.li>
        </Stack>
      </nav>
    </Box>
  );
};
