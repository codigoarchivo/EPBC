import { StarIcon } from "@chakra-ui/icons";
import { useTranslation } from "next-i18next";
import {
  Category,
  Home,
  ListEspera,
  Perfil,
  Product,
  ShopAll,
  VentasClient
} from "../../utils";

export const ListRoute = () => {
  const a = { uid: '485674085', rol: 'owner' };
  const { t } = useTranslation('major');


  const dataRoute = [
    {
      icon: <Home />,
      ref: "/",
      as: "/",
      nam: t('mA'),
    },
    {
      icon: <StarIcon />,
      ref: "/about/me",
      as: "/about/me",
      nam: t('mJ'),
    },
    {
      icon: <Perfil />,
      ref: "/user",
      as: "/user",
      nam: t('mD'),
      rol: a.rol === "owner" || a.rol === "user" ? "block" : "none",
    },
    {
      icon: <ListEspera />,
      ref: "/blog",
      as: "/blog",
      nam: t('mE'),
    },
    {
      icon: <VentasClient />,
      ref: `/admin/[uid]`,
      as: `/admin/${a.uid ? a.uid : "0"}`,
      nam: t('mH'),
      rol: a.rol === "owner" ? "block" : "none",
    },
    {
      icon: <Product />,
      ref: `/product/[uid]`,
      as: `/product/${a.uid ? a.uid : "0"}`,
      nam: t('mG'),
    },
    {
      icon: <Category />,
      ref: "/admin/category",
      as: "/admin/category",
      nam: t('mF'),
      rol: a.rol === "owner" ? "block" : "none",
    },
    {
      icon: <ShopAll />,
      ref: "/search",
      as: "/search",
      nam: t('mI'),
    },
  ];

  return {
    dataRoute,
  };
};
