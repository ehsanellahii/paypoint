import HomeComponent from '@/components/Home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | PayPoint',
  alternates: {
    canonical: '/',
    languages: { 'en-US': '/en', 'de-DE': '/de' },
  },
};

export default function Home() {
  return <HomeComponent />;
}
