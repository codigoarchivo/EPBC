import Image from 'next/image';
import { useColorMode } from '@chakra-ui/react';
import { SerchCategoryBase, SerchDataMovil } from '../serchOrCategory';


export const BaseFlexCenter = () => {
    const { colorMode } = useColorMode();

    return (
        <div className='navbar__flexCenter'>

            {/* serch modal movil */}
            <SerchDataMovil />

            <div className='navbar__flexCenter-image'>
                <Image
                    src={`/img/${colorMode === "dark" ? "logo" : "logob"}.png`}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="contain"
                    priority={true}
                />
            </div>

            <div className={'navbar__flexCenter-SerchCategoryBase'}>
                {/* serch y Category */}
                <SerchCategoryBase />
            </div>
        </div>
    )
}
