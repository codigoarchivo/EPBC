import { useRouter } from "next/router";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ModeColor } from "../../../helpers";
import { CategoryAll, SomeButton } from "../../../utils";

export const MenuCategory = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { modColor, bordes } = ModeColor();

  const listData = [{ na: { es: 'Tecnico', en: 'Tecnico' }, id: '64856438hh5o45035' }]
  return (
    <Menu>
      <MenuButton
        size={"sm"}
        leftIcon={<CategoryAll />}
        variant={"primary"}
        as={Button}
        textTransform={"uppercase"}
        minWidth={"fit-content"}
      >
        {t('categories')}
      </MenuButton>
      <Portal>
        <MenuList
          bg={modColor.modelE}
          display={{ base: "none", md: "block" }}
          minWidth={0}
          border={bordes}
        >
          {listData.map(({ na, id }) => (
            <MenuItem key={id}>
              <SomeButton
                href={{
                  pathname: "/search",
                  query: { n: id, c: locale === "en" ? na.en : na.es },
                }}
                name={locale === "en" ? na.en : na.es}
                variant={"tertiary"}
                fontWeight={"normal"}
              />
            </MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
};
