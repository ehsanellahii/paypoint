import LifeStyle from '@/components/LifeStyle/LifeStyle';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'LifeStyle',
  alternates: {
    canonical: '/lifestyle',
    languages: { 'en-US': '/en/lifestyle', 'de-DE': '/de/lifestyle' },
  },
};

const lifestyle = () => {
  return <LifeStyle />;
};

export default lifestyle;
