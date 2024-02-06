import LifeStyle from '@/components/LifeStyle/LifeStyle';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'LifeStyle',
};

const lifestyle = () => {
  return <LifeStyle />;
};

export default lifestyle;
