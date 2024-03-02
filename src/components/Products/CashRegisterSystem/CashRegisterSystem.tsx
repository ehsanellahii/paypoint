import ContactForm from '@/components/Contactus/ContactForm';
import FAQ from '@/components/Pricing/FAQ';
import Advantages from '@/components/shared/sections/Advantages';
import Features from '@/components/shared/sections/Features';
import ProductDetails from '@/components/shared/sections/ProductDetails';
import ProductsHero from '@/components/shared/sections/ProductsHero';
import SuccessStories from '@/components/shared/sections/SuccessStories/SuccessStories';
import { ProductStaticData } from '@/constants/ProductsStatic';
import React from 'react';
import FullWidthSliderWithTwoGridLayout from './FullWidthSliderWithTwoGridLayout';
import LeftImageProductHero from './LeftImageHero';
import RightImageProductHero from './RightImageHero';

const CashRegisterSystem = () => {
  return (
    <>
      <ProductsHero
        productTitle={ProductStaticData.CashRegisterSystem.ProductTitle}
        header={ProductStaticData.CashRegisterSystem.Hero.header}
        title={ProductStaticData.CashRegisterSystem.Hero.title}
        about={ProductStaticData.CashRegisterSystem.Hero.about}
        video={ProductStaticData.CashRegisterSystem.Hero.video}
        image=''
      />
      <div className='w-full h-full bg-white'>
        <SuccessStories stories={ProductStaticData.CashRegisterSystem.SuccessStories} />
        <Advantages advantages={ProductStaticData.CashRegisterSystem.Advantages} />
        <FullWidthSliderWithTwoGridLayout
          slides={ProductStaticData.CashRegisterSystem.Slider}
        />
        <LeftImageProductHero
          header={
            ProductStaticData.CashRegisterSystem.MobileCashRegisterCategorizing.header
          }
          title={
            ProductStaticData.CashRegisterSystem.MobileCashRegisterCategorizing.title
          }
          about={
            ProductStaticData.CashRegisterSystem.MobileCashRegisterCategorizing.about
          }
          image={
            ProductStaticData.CashRegisterSystem.MobileCashRegisterCategorizing.image
          }
        />
        <RightImageProductHero
          header={ProductStaticData.CashRegisterSystem.IntegratedPayments.header}
          title={ProductStaticData.CashRegisterSystem.IntegratedPayments.title}
          about={ProductStaticData.CashRegisterSystem.IntegratedPayments.about}
          image={ProductStaticData.CashRegisterSystem.IntegratedPayments.image}
        />
        <LeftImageProductHero
          header={ProductStaticData.CashRegisterSystem.ContactLessOrdering.header}
          title={ProductStaticData.CashRegisterSystem.ContactLessOrdering.title}
          about={ProductStaticData.CashRegisterSystem.ContactLessOrdering.about}
          image={ProductStaticData.CashRegisterSystem.ContactLessOrdering.image}
        />
        <RightImageProductHero
          header={ProductStaticData.CashRegisterSystem.CreateTrust.header}
          title={ProductStaticData.CashRegisterSystem.CreateTrust.title}
          about={ProductStaticData.CashRegisterSystem.CreateTrust.about}
          image={ProductStaticData.CashRegisterSystem.CreateTrust.image}
        />
        <Features
          header=''
          title={''}
          about={[]}
          image={''}
          showFeaturesHero={false}
          features={ProductStaticData.CashRegisterSystem.Features}
        />
      </div>
      <FAQ />
      <ContactForm />
      <ProductDetails />
    </>
  );
};

export default CashRegisterSystem;
