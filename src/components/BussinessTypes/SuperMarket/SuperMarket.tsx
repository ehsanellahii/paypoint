import React from 'react';
import BusinessTypeHero from './BusinessTypeHero';
import { BusinessTypeStatic } from '@/constants/BusinessTypeStatic';
import AboutService from './AboutService';
import ImageOnRightContentOnLeft from '@/components/shared/sections/ImageContentSides/ImageOnRightContentOnLeft';
import ImageOnLeftContentOnRight from '@/components/shared/sections/ImageContentSides/ImageOnLeftContentOnRight';
import FAQ from '../LifeStyle/FAQ';
import ContactForm from '@/components/Contactus/ContactForm';
import ProductDetails from '@/components/shared/sections/ProductDetails';
import { PiPlusBold } from 'react-icons/pi';
import DuaSections from '../../shared/sections/DuaSections';
import PickUpApp from './PickUpApp';
import FleetManagement from './FleetManagement';
import { useTranslations } from 'next-intl';

const SuperMarket = () => {
  const t = useTranslations('Common');
  return (
    <div className='bg-white'>
      <BusinessTypeHero
        header={BusinessTypeStatic.SuperMarket.Hero.header}
        titleOne={BusinessTypeStatic.SuperMarket.Hero.titleOne}
        titleTwo={BusinessTypeStatic.SuperMarket.Hero.titleTwo}
        titleThree={BusinessTypeStatic.SuperMarket.Hero.titleThree}
        descOne={BusinessTypeStatic.SuperMarket.Hero.about}
        btnOneText={BusinessTypeStatic.SuperMarket.Hero.btnOneText}
        btnTwoText={BusinessTypeStatic.SuperMarket.Hero.btnTwoText}
        imageUrl={BusinessTypeStatic.SuperMarket.Hero.imageUrl}
      />
      <AboutService
        headerTitle={BusinessTypeStatic.SuperMarket.AboutService.headerTitle}
        about={BusinessTypeStatic.SuperMarket.AboutService.about}
      />
      <DuaSections
        Header={BusinessTypeStatic.SuperMarket.WebShopAndApp.header}
        TitleOne={BusinessTypeStatic.SuperMarket.WebShopAndApp.titleOne}
        TitleTwo={BusinessTypeStatic.SuperMarket.WebShopAndApp.titleTwo}
        Bullets={BusinessTypeStatic.SuperMarket.WebShopAndApp.Bullets}
        ImageUrl={BusinessTypeStatic.SuperMarket.WebShopAndApp.imageUrl}
        LeanMoreUrl={''}
        imageDivStyle='order-2 '
        textDivStyle='order-1'
      />
      <PickUpApp
        Header={BusinessTypeStatic.SuperMarket.PickAppAndDigitalService.header}
        TitleOne={BusinessTypeStatic.SuperMarket.PickAppAndDigitalService.titleOne}
        TitleTwo={BusinessTypeStatic.SuperMarket.PickAppAndDigitalService.titleTwo}
        Bullets={BusinessTypeStatic.SuperMarket.PickAppAndDigitalService.Bullets}
        ImageUrl={BusinessTypeStatic.SuperMarket.PickAppAndDigitalService.imageUrl}
        LeanMoreUrl={''}
        imageDivStyle='order-2 md:order-1'
        textDivStyle='order-1 md:order-2'
      />
      <div className='w-full flex items-center justify-center py-[5rem] md:py-0'>
        <PiPlusBold size={70} />
      </div>
      <FleetManagement
        Header={BusinessTypeStatic.SuperMarket.FleetManagement.header}
        TitleOne={BusinessTypeStatic.SuperMarket.FleetManagement.titleOne}
        TitleTwo={BusinessTypeStatic.SuperMarket.FleetManagement.titleTwo}
        Bullets={BusinessTypeStatic.SuperMarket.FleetManagement.Bullets}
        ImageUrl={BusinessTypeStatic.SuperMarket.FleetManagement.imageUrl}
        LeanMoreUrl={''}
        imageDivStyle='order-1 md:order-2'
        textDivStyle='order-2 md:order-1'
      />
      <DuaSections
        Header={BusinessTypeStatic.SuperMarket.MerchandiseManagement.header}
        TitleOne={BusinessTypeStatic.SuperMarket.MerchandiseManagement.titleOne}
        TitleTwo={BusinessTypeStatic.SuperMarket.MerchandiseManagement.titleTwo}
        Bullets={BusinessTypeStatic.SuperMarket.MerchandiseManagement.Bullets}
        ImageUrl={BusinessTypeStatic.SuperMarket.MerchandiseManagement.imageUrl}
        LeanMoreUrl={''}
        imageDivStyle='order-2 md:order-1'
        textDivStyle='order-1 md:order-2'
      />
      <FAQ />
      <ContactForm />
      <ProductDetails />
    </div>
  );
};

export default SuperMarket;
