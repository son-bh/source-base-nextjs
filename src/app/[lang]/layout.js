import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import ToastContainerClient from 'src/components/Toast/ToastContainer';
// import TranslationsProvider from 'src/components/TranslationsProvider';
import { i18n } from '../../i18n-config';

import Provider from './Provider';

import '../../styles/app.css';
import 'tw-elements-react/dist/css/tw-elements-react.min.css';

// const TopBar = dynamic(() => import('src/components/TopBar'), { ssr: false });
// const Footer = dynamic(() => import('src/components/Footer'), { ssr: false });

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Source base',
  description: 'Source base',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Provider>
          {/* <TranslationsProvider locale={lng}> */}
          {/* <TopBar /> */}
          {children}
          {/* <Footer /> */}
          <ToastContainerClient />
          {/* </TranslationsProvider> */}
        </Provider>
      </body>
    </html>
  );
}
