'use client';
import React from 'react';
import FAQ from './FAQ';
import SocialContacts from './SocialContacts';
import ContactForm from './ContactForm';
import Hero from './Hero';

const ContactUs = () => {
  return (
    <>
      <Hero />
      <SocialContacts />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default ContactUs;
