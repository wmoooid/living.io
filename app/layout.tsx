import Header from '@/components/header';
import Footer from '@/components/footer';
import Stripes from '@/components/stripes';
import localFont from 'next/font/local';
import SmoothScrolling from '@/components/smooth-scrolling';
import '@/node_modules/normalize.css';
import '@/styles/globals.scss';
import Navigation from '@/components/navigation';

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
                <Navigation />
                <SmoothScrolling>
                    <main>{children}</main>
                    <Footer />
                </SmoothScrolling>
                <Stripes />
            </body>
        </html>
    );
}
