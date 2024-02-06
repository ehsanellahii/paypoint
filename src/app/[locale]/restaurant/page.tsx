import Restaurant from '@/components/Restaurant/Restaurant';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Restaurant',
};

const page = () => {
  return <Restaurant />;
};

export default page;
