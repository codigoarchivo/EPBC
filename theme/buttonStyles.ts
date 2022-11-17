import { mode } from "@chakra-ui/theme-tools";


export const buttonStyles = {
    variants: {
        primary: (props: any) => ({
            rounded: "none",
            textDecoration: "none",
            backgroundColor: mode("brand.900", "brand.500")(props),
            color: mode("brand.500", "brand.900")(props),
            _hover: {
                backgroundColor: mode("brand.600", "brand.200")(props),
                color: mode("brand.900", "brand.800")(props),
            },
            _focus: {
                ring: 2,
                ringColor: mode("brand.600", "brand.200")(props),
            },
            _active: {
                backgroundColor: mode("brand.800", "brand.900")(props),
                color: mode("brand.900", "brand.500")(props),
            },
        }),
        secondary: (props: any) => ({
            rounded: "none",
            backgroundColor: "transparent",
            color: mode("brand.500", "brand.900")(props),
            _hover: {
                color: mode("brand.50", "brand.300")(props),
            },
            _focus: {
                ring: 2,
                ringColor: "transparent",
            },
        }),
        tertiary: (props: any) => ({
            backgroundColor: "transparent",
            color: mode("brand.900", "brand.500")(props),
            _hover: {
                color: mode("brand.50", "brand.50")(props),
            },
            _focus: {
                ring: 2,
                ringColor: "transparent",
            },
        }),
        outline: (props: any) => ({
            backgroundColor: "transparent",
            color: mode("brand.900", "brand.500")(props),
            _hover: {
                backgroundColor: "brand.800",
                color: "brand.900",
            },
            _focus: {
                ring: 2,
                ringColor: "transparent",
            },
        }),
    },
};