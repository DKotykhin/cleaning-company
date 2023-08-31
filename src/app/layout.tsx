import { ReactNode } from "react";

import localFont from 'next/font/local';
import type { Metadata } from 'next';

import { ToastContainer, Flip } from 'react-toastify';

import { generalMetaData } from 'metadata/metadata';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

const satoshi = localFont({
    src: [
        {
            path: '../fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Satoshi-Medium.woff2',
            weight: '500',
            style: 'semi-bold',
        },
        {
            path: '../fonts/Satoshi-Bold.woff2',
            weight: '700',
            style: 'bold',
        },
        {
            path: '../fonts/Satoshi-Black.woff2',
            weight: '900',
            style: 'black',
        },
    ],
});

export const metadata: Metadata = generalMetaData;

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={satoshi.className}>
                <Header />
                <main style={{ flexGrow: 1 }}>
                    {children}
                </main>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    transition={Flip}
                    closeOnClick
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </body>
        </html>
    );
}
