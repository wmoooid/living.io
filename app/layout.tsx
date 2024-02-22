import '@/node_modules/normalize.css';
import '@/styles/globals.scss';
import Footer from '@/components/layout/footer/footer';
import Stripes from '@/components/layout/stripes/stripes';
import localFont from 'next/font/local';
import SmoothScrolling from '@/components/utils/smooth-scrolling/smooth-scrolling';
import Navigation from '@/components/layout/navigation/navigation';
import PopupContextProvider from '@/components/layout/popup-form/popup-context';
import PopupForm from '@/components/layout/popup-form/popup-form';
import ThemeContextProvider from '@/components/utils/theme-context/theme-context';
import { Analytics } from '@vercel/analytics/react';

const Muller = localFont({
    src: [
        {
            path: './fonts/MullerLight.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/MullerRegular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/MullerMedium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/MullerBold.woff2',
            weight: '600',
            style: 'normal',
        },
    ],
});

export const metadata = {
    title: 'Living.io',
    description: 'Living.io',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru' className={Muller.className}>
            <body>
                <ThemeContextProvider>
                    <PopupContextProvider>
                        <SmoothScrolling>
                            <Navigation />
                            <main>{children}</main>
                            <Footer />
                            <Stripes />
                            <PopupForm />
                        </SmoothScrolling>
                    </PopupContextProvider>
                </ThemeContextProvider>
                <Analytics />
            </body>
        </html>
    );
}

{
    /* <Script strategy='beforeInteractive' id='apply-theme'>
{`if (typeof window !== 'undefined' && window.matchMedia) {
    const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.classList.add(currentTheme);
}`}
</Script> */
}
