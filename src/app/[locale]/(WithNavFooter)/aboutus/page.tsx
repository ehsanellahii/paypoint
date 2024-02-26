import AboutUs from '@/components/AboutUs/AboutUs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Aboutus',
  alternates: {
    canonical: '/aboutus',
    languages: { 'en-US': '/en/aboutus', 'de-DE': '/de/aboutus' },
  },
};

const page = () => {
  return <AboutUs />;
};

export default page;
