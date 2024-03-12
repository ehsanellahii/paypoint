import React from 'react';

import Features from '../../shared/sections/Features';
import FAQ from '../../Pricing/FAQ';
import ContactForm from '../../Contactus/ContactForm';
import SuccessStories from '../../shared/sections/SuccessStories/SuccessStories';
import Advantages from '../../shared/sections/Advantages';
import ProductDetails from '../../shared/sections/ProductDetails';

import { ProductStaticData } from '@/constants/ProductsStatic';
import ProductsHero from '../../shared/sections/ProductsHero';
import DeliveryPortalDetails from '../DeliveryPortal/DeliveryPortalDetails';

const QRCodeOrder = () => {
  return (
    <>
      <ProductsHero
        productTitle={ProductStaticData.QRCodeOrder.ProductTitle}
        header={ProductStaticData.QRCodeOrder.Hero.header}
        title={ProductStaticData.QRCodeOrder.Hero.title}
        about={ProductStaticData.QRCodeOrder.Hero.about}
        image={ProductStaticData.QRCodeOrder.Hero.image}
      />
      <SuccessStories stories={ProductStaticData.QRCodeOrder.SuccessStories} />
      <Advantages advantages={ProductStaticData.QRCodeOrder.Advantages} />
      <Features
        header={ProductStaticData.QRCodeOrder.FeatureGridLayout.header}
        title={ProductStaticData.QRCodeOrder.FeatureGridLayout.title}
        about={ProductStaticData.QRCodeOrder.FeatureGridLayout.about}
        image={ProductStaticData.QRCodeOrder.FeatureGridLayout.image}
        features={ProductStaticData.QRCodeOrder.FeatureGridLayout.features}
      />
      <FAQ />
      <ContactForm />
      <DeliveryPortalDetails />
    </>
  );
};

export default QRCodeOrder;
