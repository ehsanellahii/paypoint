import ContactUs from '@/components/Contactus/Contactus';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'ContactUs',
};

const page = () => {
  return <ContactUs />;
};

export default page;
