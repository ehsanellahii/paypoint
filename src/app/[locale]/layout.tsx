import { Roboto } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/shared/layout/Navigation';
import Footer from '@/components/shared/layout/Footer';
import {
  useLocale,
  useMessages,
  useTranslations,
  NextIntlClientProvider,
} from 'next-intl';
import { notFound } from 'next/navigation';
import { Providers } from './providers';
import { locales } from '@/navigation';
import { Metadata } from 'next';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: { default: 'Paypoint', template: '%s | Paypoint' },
  description:
    'No manual management of orders.NEW Integrated automations.NEU Integrated automations.',
  openGraph: {
    url: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();
  const messages = useMessages();
  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={params.locale ?? locales}>
      <body className={roboto.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <Providers>{children}</Providers>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
