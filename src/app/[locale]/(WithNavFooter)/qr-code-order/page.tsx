import QRCodeOrder from '@/components/QRCodeOrder/QRCodeOrder';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'QR Code Order',
    alternates: {
      canonical: '/qr-code-order',
      languages: { 'en-US': '/en/qr-code-order', 'de-DE': '/de/qr-code-order' },
    },
  };

export default function page() {
  return <QRCodeOrder />;
}
