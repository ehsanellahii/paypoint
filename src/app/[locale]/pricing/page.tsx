
import React from 'react';
import Pricing from '@/components/Pricing/Pricing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
};

const PricingPage = () => {
  return <Pricing />;
};

export default PricingPage;
