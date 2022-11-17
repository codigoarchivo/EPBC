import { FC, forwardRef, HTMLProps, createRef } from 'react';

import Link from 'next/link';

import { Button } from "@chakra-ui/react";

import { IPropsButton } from '../../interfaces';

export const SomeButton: FC<IPropsButton> = ({
    as,
    backgroundColor,
    border,
    boxShadow,
    color,
    disabled,
    display,
    fontSize,
    fontWeight,
    href,
    leftIcon,
    locale,
    name,
    position,
    px,
    rightIcon,
    rounded,
    size,
    styles,
    textTransform,
    variant,
    w,
    zIndex,
}) => {


    const MyButton = forwardRef<HTMLButtonElement, HTMLProps<HTMLButtonElement>>((props: any, ref) => {
        return (
            <Button
                {...props}
                as={'div'}
                backgroundColor={backgroundColor}
                border={border}
                color={color}
                cursor={"pointer"}
                disabled={disabled}
                display={display}
                fontSize={fontSize}
                fontWeight={fontWeight}
                leftIcon={leftIcon}
                position={position}
                px={px}
                ref={ref}
                rightIcon={rightIcon}
                rounded={rounded}
                shadow={boxShadow}
                size={size}
                style={{ ...styles }}
                textTransform={textTransform}
                variant={variant}
                w={w}
                zIndex={zIndex}
            >
                {name}
            </Button>
        )
    })

    MyButton.displayName = 'MyButton';

    return (
        <Link href={href} as={as} locale={locale} passHref>
            <MyButton ref={createRef<HTMLButtonElement>()} />
        </Link>
    )

}
