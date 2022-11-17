import { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ModeColor } from "../../../helpers";
import { IIconOrAuthOrText } from "../../../interfaces";
import { SomeButton } from "../../../utils";

export const IconOrText: FC<IIconOrAuthOrText> = ({
    HrefA,
    NameA,
    onClickA,
    ValueA,
    DisplayA,
    DisplayB,
    TopA,
    IndexA,
    RightA,
    WidthA,
    HeightA
}) => {
    const { modColor, bordes } = ModeColor();

    return (
        <Box display={DisplayA}>
            <Flex alignItems={"center"} display={DisplayB}>
                <Box
                    position={"relative"}
                    onClick={() => onClickA}
                >
                    <SomeButton
                        px={0}
                        fontWeight={400}
                        variant={"tertiary"}
                        href={HrefA}
                        name={NameA}
                    />
                    <Flex
                        backgroundColor={modColor.modelF}
                        color={modColor.modelB}
                        right={RightA}
                        top={TopA}
                        zIndex={IndexA}
                        border={bordes}
                        alignItems={"center"}
                        justifyContent="center"
                        borderRadius={"full"}
                        position={"absolute"}
                        w={WidthA}
                        h={HeightA}
                        fontWeight={"bold"}
                        fontSize={{ base: "x-small", sm: "smaller" }}
                    >
                        {ValueA}
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}
