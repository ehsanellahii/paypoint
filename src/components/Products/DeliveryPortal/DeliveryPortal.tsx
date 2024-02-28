import ContactForm from '@/components/Contactus/ContactForm';
import Features from '@/components/Home/Features';
import FAQ from '@/components/Pricing/FAQ';
import Advantages from '@/components/shared/sections/Advantages';
import ProductDetails from '@/components/shared/sections/ProductDetails';
import ProductsHero from '@/components/shared/sections/ProductsHero';
import SuccessStories from '@/components/shared/sections/SuccessStories/SuccessStories';
import { ProductStaticData } from '@/constants/ProductsStatic';
import React from 'react';
import Partners from './Partners';
import HowItWorks from './HowItWorks';

const DeliveryPortal = () => {
  return (
    <>
      <ProductsHero
        productTitle={ProductStaticData.DeliveryPortalIntegration.ProductTitle}
        header={ProductStaticData.DeliveryPortalIntegration.Hero.header}
        title={ProductStaticData.DeliveryPortalIntegration.Hero.title}
        about={ProductStaticData.DeliveryPortalIntegration.Hero.about}
        image={ProductStaticData.DeliveryPortalIntegration.Hero.image}
      />
      <SuccessStories
        stories={ProductStaticData.DeliveryPortalIntegration.SuccessStories}
      />
      <Advantages advantages={ProductStaticData.DeliveryPortalIntegration.Advantages} />
      <Partners
        header={ProductStaticData.DeliveryPortalIntegration.Partners.header}
        about={ProductStaticData.DeliveryPortalIntegration.Partners.about}
        title={ProductStaticData.DeliveryPortalIntegration.Partners.title}
        image={ProductStaticData.DeliveryPortalIntegration.Partners.image}
      />
      <HowItWorks
        about={ProductStaticData.DeliveryPortalIntegration.HowItWorks.about}
        title={ProductStaticData.DeliveryPortalIntegration.HowItWorks.title}
        steps={ProductStaticData.DeliveryPortalIntegration.HowItWorks.steps}
      />
      <FAQ />
      <ContactForm />
      <ProductDetails />
    </>
  );
};

export default DeliveryPortal;
