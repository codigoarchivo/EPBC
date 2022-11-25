import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SWRConfig } from 'swr';
import { CssBaseline } from '@mui/material';
import {
  AuthProvider,
  CartProvider,
  ColorsProvider,
  UiProvider
} from '../context';
import '../scss/styles.scss';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <SessionProvider>
      <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || '' }}>
        <SWRConfig value={{
          fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
        }}>
          <AuthProvider>
            <CartProvider>
              <UiProvider>
                <ColorsProvider>
                  <CssBaseline />
                  <Component {...pageProps} />
                </ColorsProvider>
              </UiProvider>
            </CartProvider>
          </AuthProvider>
        </SWRConfig>
      </PayPalScriptProvider>
    </SessionProvider>
  )
}

export default MyApp
