import Restaurant from '@/components/BussinessTypes/Restaurant/Restaurant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Restaurant',
  alternates: {
    canonical: '/restaurant',
    languages: { 'en-US': '/en/restaurant', 'de-DE': '/de/restaurant' },
  },
};

const page = () => {
  return <Restaurant />;
};

export default page;
