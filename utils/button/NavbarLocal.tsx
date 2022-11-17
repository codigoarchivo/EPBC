import { useRouter } from "next/router";
import { HStack, Box, chakra } from "@chakra-ui/react";
import { Global } from "../icons";
import { SomeButton } from "./";

export const NavbarLocal = () => {
  const { locales, asPath } = useRouter();
  return (
    <HStack spacing={0} w={"full"} alignItems={"flex-end"} py={5}>
      <Box ml={4} w={6} h={6} as={Global} />{" "}
      {locales!.map((lo, i) => (
        <chakra.li key={i} sx={{ listStyle: "none" }}>
          <SomeButton
            size={"sm"}
            variant={"tertiary"}
            href={asPath}
            locale={lo}
            name={lo === "en" ? "en" : lo}
            px={0}
            w={0}
          />
        </chakra.li>
      ))}
    </HStack>
  );
};
