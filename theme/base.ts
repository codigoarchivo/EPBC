import {
  extendTheme,
  withDefaultVariant,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import {
  inputStyles,
  buttonStyles,
  globalStyles,
  colors,
  config,
  brandRing,
  stylesFonts
} from "./";

export const theme = extendTheme(
  {
    config,
    ...stylesFonts,
    ...globalStyles,
    colors,
    components: {
      Button: {
        ...buttonStyles,
      },
      NumberInput: {
        ...inputStyles,
      },
      Input: {
        ...inputStyles,
      },
      Select: {
        ...inputStyles,
      },
      Textarea: {
        ...inputStyles,
      },
      Checkbox: {
        baseStyle: {
          control: {
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultVariant({
    variant: "filled",
    components: [
      "Input",
      "NumberInput",
      "PinInput",
      "Select",
      "Textarea",
      "Checkbox",
    ],
  }),
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  })
);
