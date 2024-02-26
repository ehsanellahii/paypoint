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
import { locales, useRouter } from '@/navigation';
import { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://get-paypoint.de'),
  title: { default: 'PayPoint', template: '%s | PayPoint' },
  description:
    'No manual management of orders.NEW Integrated automations.NEU Integrated automations.',
  alternates: {
    canonical: 'https://get-paypoint.de/en',
  },
  keywords: [
    'delivery',
    'management',
    'system',
    'automations',
    'orders',
    'paypoint',
    'get-paypoint',
    'get-paypoint.de',
  ],
  openGraph: {
    title: 'Paypoint - The smart delivery management system',
    description:
      'No manual management of orders.NEW Integrated automations.NEU Integrated automations',
    images: '/og.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://get-paypoint.de/en',
    description:
      'No manual management of orders.NEW Integrated automations.NEU Integrated automations',
    images: '/og.png',
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
          <SpeedInsights />
          {/* <Navigation /> */}
          <Providers>{children}</Providers>
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
