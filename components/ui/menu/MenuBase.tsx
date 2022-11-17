import {
    Button,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import { ModeColor } from "../../../helpers";
import { MenuNavList, MenuNavButton } from '..';


export const MenuBase = () => {
    const { modColor } = ModeColor();
    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
            >
                <MenuNavButton />
            </MenuButton>
            {/* list navbar rigth */}
            <MenuList zIndex={10} bg={modColor.modelE}>
                <MenuNavList />
            </MenuList>
        </Menu>
    )
}
