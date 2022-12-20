import { createContext } from 'react';

import { ICartProduct, IProduct, ShippingAddress } from '../../interfaces';


interface ContextProps {
    isLoaded: boolean;
    cart: ICartProduct[];
    favorites: ICartProduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    shippingAddress?: ShippingAddress,

    // method

    addProductToCart: (product: ICartProduct) => void;
    updateCartQuantity: (product: ICartProduct) => void;
    removeCartProduct: (product: ICartProduct) => void;
    updateAddress: (product: ShippingAddress) => void;
    addFavorite: (product: ICartProduct) => void;
    deleteFavorite: (product: ICartProduct) => void;

    // orders
    createOrder: () => Promise<{ hasError: boolean; message?: string }>
}

export const CartContext = createContext({} as ContextProps);