import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
    styles: {
        global: (props: any) => ({
            body: {
                color: mode("brand.900", "brand.500")(props),
                bg: mode("brand.800", "brand.900")(props), // TODO cambiar de
            },
            html: {},
            svg: { display: "inline" },

            ul: {
                listStyle: "none",
            },
            a: {
                _hover: {
                    textDecoration: "none",
                },
            },
        }),
    },
};
