import { FC } from 'react';
import {
    Box,
    Stack,
    Container,
    Heading,
    SimpleGrid,
    Text
} from '@chakra-ui/react';
import { BlogCategory } from './';

interface Props {
    points: object,
    t: any
}

export const BlogSome: FC<Props> = ({ t, points }) => {
    return (
        <Box>
            <Stack pt={20} spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Heading fontWeight={600} lineHeight={"110%"} fontSize={points}>
                    {t('blog:bJ')}{" "}
                    <Text as={"span"} color={"brand.50"}>
                        {t('blog:bK')}
                    </Text>
                </Heading>
            </Stack>

            <Container maxW={"6xl"} mt={20} px={0}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {[
                        {
                            title: t('blog:bL'),
                            text: t('blog:bLL'),
                        },
                        {
                            title: t('blog:bM'),
                            text: t('blog:bN'),
                        },
                        {
                            title: t('blog:bÑ'),
                            text: t('blog:bO'),
                        },
                        {
                            title: t('blog:bP'),
                            text: t('blog:bR'),
                        },
                        {
                            title: t('blog:bU'),
                            text: t('blog:bV'),
                        },
                        {
                            title: t('blog:bW'),
                            text: t('blog:bX'),
                        },
                    ].map((item, index) => (
                        <BlogCategory key={index} {...item} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
