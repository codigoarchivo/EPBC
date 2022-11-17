import {
    VStack,
    Stack,
    Heading,
    HStack,
    Box
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';
import Marquee from 'react-fast-marquee';
import { ScreenCarousel } from './';
import { seedData } from '../../database';
import { Breakpoints } from '../../helpers';
import { CardBase } from '../card';

export const MarqueAndCarousel = () => {
    const { t } = useTranslation('common');
    const { points25 } = Breakpoints();
    return (

        <VStack spacing={20} mt={20}>
            {/* Marquee */}
            <Stack display={seedData[0] ? "flex" : "none"} w={"full"} spacing={10}>
                <Heading w={"full"} fontSize={points25}>
                    {t('home:hD')}
                </Heading>
                <HStack>
                    <Marquee gradient={false} style={{ height: "420px" }}>
                        <CardBase Divi={Box} product={seedData} />
                    </Marquee>
                </HStack>
            </Stack>

            {/* Carousel */}
            <Stack
                // display={!!latestCartSelect[2] ? "flex" : "none"}
                w={"full"}
                spacing={10}
                justifyContent={"center"}
            >
                <Heading w={"full"} size={"lg"} fontSize={points25} mb={10}>
                    {t('home:hE')}
                </Heading>
                <ScreenCarousel />
            </Stack>
        </VStack>
    )
}
