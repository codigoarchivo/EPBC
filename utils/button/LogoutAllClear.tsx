import { useTranslation } from "next-i18next";
import { Button } from "@chakra-ui/react";
import { Logout } from "../icons";


export const LogoutAllClear = () => {
  const { t } = useTranslation('common');

  const handleLogout = () => {
    // const err = locale === "en-US" ? en.error : es.error;
  };

  return (
    <Button
      variant={"tertiary"}
      fontWeight={"normal"}
      leftIcon={<Logout />}
      onClick={handleLogout}
    >
      {t('logout')}
    </Button>
  );
};
