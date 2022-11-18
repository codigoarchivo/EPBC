import { FC } from 'react';
import { chakra, SimpleGrid, Box } from '@chakra-ui/react'
import { Product, ShopAll, CategoryAll } from '../../utils'
import { StatsCard } from './'

interface Props {
    t: any,
}

export const BlogCant: FC<Props> = ({ t }) => {
    const product = 5;
    const buys = 3;
    const categories = 35;
    return (
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={"center"}
                fontSize={"4xl"}
                py={20}
                fontWeight={"bold"}
            >
                {t('blog:bF')}
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                spacing={{ base: 5, lg: 12 }}
            >
                <StatsCard
                    title={t('products')}
                    stat={product || 0}
                    icon={<Product h={12} w={12} />}
                />
                <StatsCard
                    title={t('sales')}
                    stat={buys || 0}
                    icon={<ShopAll h={12} w={12} />}
                />
                <StatsCard
                    title={t('categories')}
                    stat={categories || 0}
                    icon={<CategoryAll h={12} w={12} />}
                />
            </SimpleGrid>
        </Box>

    )
}
