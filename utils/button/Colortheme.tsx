import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const Colortheme = () => {
  // toogle color
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      size="xs"
      px={0}
      variant={"tertiary"}
    >
      {colorMode === "light" ? (
        <MoonIcon boxSize={6} />
      ) : (
        <SunIcon boxSize={6} />
      )}
    </Button>
  )
}
