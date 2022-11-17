import { Iseed } from '../../../interfaces';
import { SerchScreen } from './';

interface Props {
    Divi: any,
    product: Iseed[]
}

export const CardBase = ({ Divi, product }: Props) => {

    return (
        <>
            {product.map((props, key) => (
                <Divi>
                    <SerchScreen {...props} key={key} />
                </Divi>
            ))}
        </>
    )
}
