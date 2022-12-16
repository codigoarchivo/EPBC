import { FC } from "react";
import Button from "@mui/material/Button"
import { ISize } from "../../interfaces";

interface Props {
    selectedSize?: ISize;
    sizes: ISize[];

    // method
    onSelectedSize: (size: ISize) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes, onSelectedSize }) => {
    return (
        <div>
            {
                sizes.map((size) => (
                    <Button
                        sx={{ marginLeft: 0.5 }}
                        key={size}
                        size='small'
                        color={selectedSize === size ? 'primary' : 'info'}
                        onClick={() => onSelectedSize(size)}
                    >
                        {size}
                    </Button>
                ))
            }
        </div>
    )
}
