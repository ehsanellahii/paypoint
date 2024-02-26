
import React from 'react';
import Pricing from '@/components/Pricing/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  alternates: {
    canonical: '/pricing',
    languages: { 'en-US': '/en/pricing', 'de-DE': '/de/pricing' },
  },
};

const PricingPage = () => {
  return <Pricing />;
};

export default PricingPage;
