import React from 'react';

import Features from '../../shared/sections/Features';
import FAQ from '../../Pricing/FAQ';
import ContactForm from '../../Contactus/ContactForm';
import SuccessStories from '../../shared/sections/SuccessStories/SuccessStories';
import Advantages from '../../shared/sections/Advantages';
import ProductDetails from '../../shared/sections/ProductDetails';

import { ProductStaticData } from '@/constants/ProductsStatic';
import ProductsHero from '../../shared/sections/ProductsHero';
import HowItWorks from './HowItWorks';
import Calculation from '@/components/Pricing/Calculation';
import ImageOnRightContentOnLeft from '@/components/shared/sections/ImageContentSides/ImageOnRightContentOnLeft';
import ImageOnLeftContentOnRight from '@/components/shared/sections/ImageContentSides/ImageOnLeftContentOnRight';
import { StaticData } from '@/constants/Static';
import DeliveryPortalDetails from '../DeliveryPortal/DeliveryPortalDetails';

const WebShopApp = () => {
  return (
    <>
      <ProductsHero
        productTitle={ProductStaticData.WebShopAndApp.ProductTitle}
        header={ProductStaticData.WebShopAndApp.Hero.header}
        title={ProductStaticData.WebShopAndApp.Hero.title}
        about={ProductStaticData.WebShopAndApp.Hero.about}
        video={ProductStaticData.WebShopAndApp.Hero.video}
        image=''
      />
      <SuccessStories stories={ProductStaticData.WebShopAndApp.SuccessStories} />
      <Calculation />
      <Advantages advantages={ProductStaticData.WebShopAndApp.Advantages} />
      <div className='w-full h-full bg-white'>
        <ImageOnLeftContentOnRight
          Header={ProductStaticData.WebShopAndApp.WebShop.Header}
          TitleOne={ProductStaticData.WebShopAndApp.WebShop.TitleOne}
          TitleTwo={ProductStaticData.WebShopAndApp.WebShop.TitleTwo}
          Bullets={ProductStaticData.WebShopAndApp.WebShop.Bullets}
          LeanMoreUrl={ProductStaticData.WebShopAndApp.WebShop.LearnMoreUrl}
          ImageUrl={ProductStaticData.WebShopAndApp.WebShop.Image}
        />
        <ImageOnRightContentOnLeft
          Header={ProductStaticData.WebShopAndApp.SmartReusableDeposit.Header}
          TitleOne={ProductStaticData.WebShopAndApp.SmartReusableDeposit.TitleOne}
          TitleTwo={ProductStaticData.WebShopAndApp.SmartReusableDeposit.TitleTwo}
          Bullets={ProductStaticData.WebShopAndApp.SmartReusableDeposit.Bullets}
          ImageUrl={ProductStaticData.WebShopAndApp.SmartReusableDeposit.Image}
          LeanMoreUrl={ProductStaticData.WebShopAndApp.SmartReusableDeposit.LearnMoreUrl}
        />
      </div>
      <HowItWorks
        wrapperStyle={'pt-8'}
        header={ProductStaticData.WebShopAndApp.HowItWorks.header}
        about={ProductStaticData.WebShopAndApp.HowItWorks.about}
        title={ProductStaticData.WebShopAndApp.HowItWorks.title}
        steps={ProductStaticData.WebShopAndApp.HowItWorks.steps}
      />
      <Features
        header={''}
        title={''}
        about={[]}
        image={''}
        showFeaturesHero={false}
        features={ProductStaticData.WebShopAndApp.Features}
      />
      <FAQ />
      <ContactForm />
      <DeliveryPortalDetails />
    </>
  );
};

export default WebShopApp;
