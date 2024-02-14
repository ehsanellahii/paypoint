import ContactUs from '@/components/Contactus/Contactus';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ContactUs',
  alternates: {
    canonical: '/contact',
    languages: { 'en-US': '/en/contact', 'de-DE': '/de/contact' },
  },
};

const page = () => {
  return <ContactUs />;
};

export default page;
