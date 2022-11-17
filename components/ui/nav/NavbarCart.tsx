import {
    Flex,
    Menu,
    MenuList,
} from '@chakra-ui/react';
import { CartIcon } from '../../../utils';
import { IconOrText } from '../iconOrTextOrAuth';
import { MenuNavList } from '../menu';

export const NavbarCart = () => {
    const valid = false;
    const check = [0];
    return (
        <div style={{ display: valid ? "none" : "block" }}>
            <Flex alignItems={"center"} display={{ base: "none", md: "block" }}>
                <Menu>
                    <IconOrText
                        HrefA={''}
                        NameA={<CartIcon boxSize={{ base: 6, md: 8 }} />}
                        ValueA={0}
                        TopA={0}
                        IndexA={-10}
                        RightA={{ base: -3, sm: -4 }}
                        WidthA={{ base: 4, sm: 5 }}
                        HeightA={{ base: 4, sm: 5 }}
                        // check.length > 0 && Toast(t('you'), "info", 5000)
                    />

                    <MenuList
                        zIndex={1000}
                        display={check.length > 0 ? "none" : "block"}
                    >
                        <MenuNavList />
                    </MenuList>
                </Menu>
            </Flex>
        </div>
    )
}
