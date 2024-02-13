import HomeComponent from '@/components/Home/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Paypoint',
} ;

export default function Home() {
  return <HomeComponent />;
}
