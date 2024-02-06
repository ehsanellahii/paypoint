import AboutUs from '@/components/AboutUs/AboutUs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Aboutus',
};

const page = () => {
  return <AboutUs />;
};

export default page;
