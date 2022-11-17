import { Collapse, Box, VStack, HStack, Heading } from '@chakra-ui/react';
import { Colortheme, ListNavigate, LogoutAllClear, NavbarLocal } from '../../../utils'

export const MenuCollapse = ({ isOpen }: any) => {
    return (
        <Box display={{ base: "block", lg: "none" }}>
            <Collapse in={isOpen} animateOpacity>
                <VStack
                    alignItems={'flex-start'}
                    justifyContent={"space-between"}
                    w={"full"}
                    p={4}
                    spacing={6}
                >

                    <HStack px={5} w={'full'} justifyContent={'space-between'}>
                        <Heading size={"md"}>jackson</Heading>

                        <Colortheme />
                    </HStack>

                    {/* ListNavigate */}
                    <ListNavigate Divi={Box} />

                    {/* LogoutAllClear */}
                    <LogoutAllClear />

                    {/* NavbarLocal */}
                    <NavbarLocal />
                </VStack>
            </Collapse>
        </Box>

    )
}
