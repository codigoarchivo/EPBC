import { FC, useMemo } from 'react';
import { Stack, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { seedData } from '../../database';
import { shuffle } from '../../helpers';
import { BlogOutstanding } from './';

interface Props {
    points: object,
    t: any,
}

export const BlogSalient: FC<Props> = ({ t, points }) => {

    const data = [...shuffle(seedData)];

    return (
        <Stack
            display={data.length === 3 ? "block" : "none"}
            w={"full"}
            justifyContent={"center"}
            textAlign={"center"}
            style={{ marginBottom: "60px" }}
        >
            <Heading
                fontWeight={600}
                lineHeight={"110%"}
                fontSize={points}
                py={20}
            >
                {t('blog:bG')}{" "}
                <Text as={"span"} color={"brand.50"}>
                    {t('blog:bH')}
                </Text>
            </Heading>

            <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                spacing={{ base: 5, lg: 6 }}
                justifyItems={"center"}
            >
                {data.map((item, index) => (
                    <BlogOutstanding
                        key={index}
                        item={item}
                        t={t}
                    />
                ))}
            </SimpleGrid>
        </Stack>
    )
}
