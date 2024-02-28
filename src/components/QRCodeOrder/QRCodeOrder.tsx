import React from 'react';
import './QRCodeOrder.css';

import Features from './Features';
import FAQ from '../Pricing/FAQ';
import ContactForm from '../Contactus/ContactForm';
import SuccessStories from './SuccessStories';
import Advantages from './Advantages';
import ProductDetails from './ProductDetails';
import Hero from './Hero';

import { StaticData } from '@/constants/Static';

const QRCodeOrder = () => {
  return (
    <>
      <Hero
        productTitle="QR-Code Bestellung"
        header='Tischbestellung mit QR-Code'
        title='Kontaktlos & selbstbestimmt'
        about='Ermögliche deinen Gästen bequem digital per Smartphone am Tisch zu bestellen und bargeldlos zu bezahlen.'
        image='/Assets/QRCodeOrder/hero.jpeg'
      />
      <SuccessStories stories={StaticData.QRCodeOrder.SuccessStories} />
      <Advantages advantages={StaticData.QRCodeOrder.Advantages} />
      <Features
        header={StaticData.QRCodeOrder.FeatureGridLayout.header}
        title={StaticData.QRCodeOrder.FeatureGridLayout.title}
        about={StaticData.QRCodeOrder.FeatureGridLayout.about}
        image={StaticData.QRCodeOrder.FeatureGridLayout.image}
        features={StaticData.QRCodeOrder.FeatureGridLayout.features}
      />
      <FAQ />
      <ContactForm />
      <ProductDetails />
    </>
  );
};

export default QRCodeOrder;
