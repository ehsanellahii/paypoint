import Navigation from '@/components/shared/layout/Navigation';
import Footer from '@/components/shared/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />s
    </>
  );
}
