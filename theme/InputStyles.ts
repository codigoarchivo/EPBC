import { mode } from "@chakra-ui/theme-tools";

export const inputStyles = {
    variants: {
        filled: (props: any) => ({
            field: {
                backgroundColor: mode("brand.400", "brand.300")(props),
                borderColor: mode("brand.900", "brand.800")(props),
                boxShadow: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
                _placeholder: {
                    opacity: 1,
                    color: mode("brand.800", "brand.900")(props),
                },
                _hover: {
                    backgroundColor: mode("brand.600", "brand.200")(props),
                    borderColor: mode("brand.600", "brand.200")(props),
                },
                _focus: {
                    backgroundColor: mode("brand.600", "brand.200")(props),
                    borderColor: mode("brand.600", "brand.200")(props),
                },
            },
        }),
    },
    sizes: {
        md: {
            field: {
                borderRadius: "none",
            },
        },
    },
};