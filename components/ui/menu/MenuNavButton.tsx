import Image from "next/image";
import {
  Avatar,
  AvatarBadge,
  Box,
  Stack,
} from "@chakra-ui/react";


export const MenuNavButton = () => {

  const a = { uid: '485674085' };
  return (
    <Stack direction="row" spacing={4}>
      {!a.uid ? (
        <>
          <Box w={35} h={35} position={"relative"}>
            <Image
              src={
                "https://via.placeholder.com/35.png?text=Imagen"
                // a?.photoURL ||
              }
              style={{
                borderRadius: "50%",
                alignItems: "center",
                flexShrink: 0,
              }}
              // a?.displayName ||
              alt={'foto'}
              layout="fill"
              objectPosition="center"
            />
            <AvatarBadge
              rounded={"full"}
              border={"0.15em solid"}
              borderColor={"papayawhip"}
              bg="green.500"
              w={"1em"}
              h={"1em"}
              transform={"translate(25%, 25%)"}
              right={0}
              bottom={"0px"}
              position={"absolute"}
              display={"flex"}
            />
          </Box>
        </>
      ) : (
        <Avatar size={"sm"}>
          <AvatarBadge
            borderColor="papayawhip"
            bg="tomato"
            boxSize="1.25em"
          />
        </Avatar>
      )}
    </Stack>
  );
};
