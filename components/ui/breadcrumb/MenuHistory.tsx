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
import { SomeButton } from "../../../utils";

export const MenuHistory = () => {
  const { t } = useTranslation('common');
  const { modColor, bordes } = ModeColor();
  const a = { uid: '485674085', rol: 'owner' }
  return (
    <Menu>
      <MenuButton
        fontSize={["sm"]}
        variant={"primary"}
        as={Button}
        fontWeight={"normal"}
      >
        {t('history')}
      </MenuButton>
      <Portal>
        <MenuList
          bg={modColor.modelE}
          zIndex={"1000"}
          display={{ base: "none", md: "block" }}
          minWidth={0}
          border={bordes}
        >
          <MenuItem>
            <SomeButton
              href={a.uid ? `/purchases/[uid]` : "/"}
              as={a.uid ? `/purchases/${a?.uid}` : "/"}
              name={t('buys')}
              variant={"tertiary"}
              fontWeight={"normal"}
            />
          </MenuItem>
          <MenuItem display={a.rol !== "owner" ? "block" : "none"}>
            <SomeButton
              href={a.uid ? `/sale/[uid]` : "/"}
              as={a.uid ? `/sale/${a?.uid}` : "/"}
              name={t('sales')}
              variant={"tertiary"}
              fontWeight={"normal"}
            />
          </MenuItem>
        </MenuList>
      </Portal>
    </Menu>
  );
};