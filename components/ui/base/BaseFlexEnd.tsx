
import { useRouter } from "next/router";
import { Flex, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import {
  CartIcon,
  LoveIcon,
  OrdenpagoIcon,
  ShopAll
} from "../../../utils";
import {
  IconOrText,
  NavbarCart,
  IconOrAuth,
  MenuBase
} from "..";
import { Toast } from "../../../helpers";

export const BaseFlexEnd = () => {
  const { pathname, asPath } = useRouter();
  const { t } = useTranslation('common');
  const valid = false;
  const check = [0];
  const a = { uid: '485674085' };
  return (
    <Stack
      flex={{ base: 1, md: 0 }}
      justify={"flex-end"}
      justifyContent={"space-around"}
      direction={"row"}
      spacing={{ base: 0, md: 6 }}
      alignItems={"center"}
      ml={{ base: 0, sm: 3 }}
    >



      <div>
        {/* icon cart movil */}
        <IconOrText
          // href 
          HrefA={
            pathname !== "/cart"
              ? check.length > 0
                ? "/search"
                : "/cart"
              : "/search"
          }
          // name or icon
          NameA={pathname !== "/cart" ? (
            <CartIcon boxSize={{ base: 6, sm: 7 }} />
          ) : (
            <ShopAll boxSize={{ base: 6, sm: 7 }} />
          )}
          // event
          // onClickA={
          //   check.length > 0 && Toast(t('you'), "info", 5000)
          // }
          ValueA={0 /* {!activeCartSelect[0] ? 0 : activeCartSelect.length} */}
          DisplayA={valid ? "none" : "block"}
          DisplayB={{ base: "block", md: "none" }}
          TopA={0}
          IndexA={-10}
          RightA={{ base: 0, sm: -2 }}
          WidthA={{ base: 4, sm: 5 }}
          HeightA={{ base: 4, sm: 5 }}
        />
      </div>

      {/* icon or text | cart pc */}
      <div>
        <NavbarCart />
      </div>

      {/* icon or auth | login pc */}
      <div>
        <IconOrAuth
          // href 
          HrefA={
            a.uid ? `/checkout?q=${a.uid}` : `/auth?d=${asPath}`
          }
          // name or icon
          NameA={
            a.uid ? (
              <OrdenpagoIcon boxSize={{ base: 6, sm: 7 }} />
            ) :
              (
                t('auth:aB')
              )
          }
          ValueA={0 /* {check.length > 0 ? check.length : 0 }*/}
          DisplayA={a.uid ? "block" : "none"}
          WidthA={{ base: 4, sm: 5 }}
          TopA={0}
          IndexA={0}
          IndexB={100}
          RightA={{ base: -1, sm: -3 }}
          HeightA={{ base: 4, sm: 5 }}
        />
      </div>

      {/* icon or auth | logout pc */}
      <div>
        <IconOrAuth
          // href 
          HrefA={
            a.uid ? "/cart" : `/auth/create?d=${asPath}`
          }
          // name or icon
          NameA={
            a.uid ? (
              <LoveIcon boxSize={{ base: 6, sm: 7 }} />
            ) : (
              t('auth:aH')
            )
          }
          ValueA={0 /* {!saveCartSelect[0] ? 0 : saveCartSelect.length}*/}
          DisplayA={a.uid ? "block" : "none"}
          WidthA={{ base: 4, sm: 5 }}
          TopA={0}
          IndexA={-10}
          RightA={{ base: -1, sm: -3 }}
          HeightA={{ base: 4, sm: 5 }}
        />
      </div>
      {/* icon menu  | Admin pc */}
      <div>
        <Flex alignItems={"center"} display={{ base: "none", lg: "block" }}>
          <MenuBase />
        </Flex>
      </div>
    </Stack>
  )
}
