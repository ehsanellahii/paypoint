import Navigation from '@/components/shared/layout/Navigation';
import Footer from '@/components/shared/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-full bg-bgApp'>
      <Navigation />
      {children}
      <Footer />s
    </div>
  );
}
