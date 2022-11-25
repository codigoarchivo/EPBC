import { FC, ReactNode } from "react"
import Head from "next/head"
import { SideMenu, BaseNavbar, StickyFooter } from "../ui";


interface Props {
    children: ReactNode;
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
}

export const BaseLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />
                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>
            <SideMenu />
            <BaseNavbar />



            <main>{children}</main>

            <StickyFooter />
        </>
    )
}
