import {
    Heading,
    HStack,
    MenuDivider,
    MenuItem,
} from '@chakra-ui/react'
import { ListRoute } from '../../routes';
import {
    Colortheme,
    ListNavigate,
    LogoutAllClear,
    NavbarLocal,
} from '../../../utils';


export const MenuNavList = () => {
    const { dataRoute } = ListRoute();
    return (
        <>
            <MenuItem as={"div"}>
                <HStack px={5} w={'full'} justifyContent={'space-between'}>
                    <Heading size={"md"}>jackson</Heading>

                    <Colortheme />
                </HStack>
            </MenuItem>
            <MenuDivider />
            {/* Navigate */}
            {<ListNavigate Divi={MenuItem} />}

            {/* LogoutAllClear */}
            <MenuItem as={"div"}>
                <LogoutAllClear />
            </MenuItem>

            {/* NavbarLocal */}
            <MenuItem as={"div"}>
                <NavbarLocal />
            </MenuItem>

        </>
    )
}
