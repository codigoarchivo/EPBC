import { ReactElement } from "react";


export interface IPropsButton {
    as?: string,
    backgroundColor?: object | string,
    border?: object | string,
    boxShadow?: object | string,
    color?: object | string,
    disabled?: boolean,
    display?: object | string,
    fontSize?: object | string,
    fontWeight?: string | number,
    href?: any,
    leftIcon?: ReactElement,
    locale?: string,
    name?: string | ReactElement,
    position?: IPosition,
    px?: string | number,
    rightIcon?: ReactElement,
    rounded?: object | string,
    size?: object | string,
    styles?: any,
    textTransform?: any,
    variant?: string,
    w?: object | string | number,
    zIndex?: object | number,
}

type IPosition = 'relative' | 'absolute' | 'fixed';