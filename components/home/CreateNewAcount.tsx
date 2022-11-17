import { Box, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ModeColor } from "../../helpers";
import { SomeButton } from "../../utils";

export const CreateNewAcount = () => {
  const { t } = useTranslation('common');
  const { modColor } = ModeColor();
  return (
    <Stack
      p={5}
      w={"full"}
      flexDirection={"row"}
      backgroundColor={modColor.modelE}
      alignItems={"center"}
      spacing={0}
      rounded={"lg"}
      boxShadow={"lg"}
    >
      <Heading
        color={modColor.modelF}
        display={{ base: "none", sm: "block" }}
        textTransform={"capitalize"}
        w={"full"}
        mr={5}
        size={"sm"}
      >
        {t('home:hC')}
      </Heading>
      <Box>
        <SomeButton
          size={"sm"}
          variant={"primary"}
          name={t('create')}
          href={"/auth/create"}
          rounded={"lg"}
        />
      </Box>
    </Stack>
  );
};
