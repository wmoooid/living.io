import Header from '@/components/header';
import Footer from '@/components/footer';
import Stripes from '@/components/stripes';
import '@/node_modules/normalize.css';
import '@/styles/globals.scss';

export const metadata = {
    title: 'Living.io',
    description: 'Living.io',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ru'>
            <body>
                <Header />
                <main>{children}</main>
                <Stripes />
                <Footer />
            </body>
        </html>
    );
}
