import React from 'react';
import Hero from './Hero';
import AboutService from '../../shared/sections/AboutService';
import Wrapper from '../../shared/Wrapper';
import OneSystem from './OneSystem';
import { StaticData } from '@/constants/Static';
import ImageOnLeftContentOnRight from '../../shared/sections/ImageContentSides/ImageOnLeftContentOnRight';
import ImageOnRightContentOnLeft from '../../shared/sections/ImageContentSides/ImageOnRightContentOnLeft';
import FAQ from './FAQ';

const Restaurant = () => {
  return (
    <>
      <Hero />
      <Wrapper style='w-full h-full bg-white'>
        <AboutService
          headerTitle={'Für volle Teller und stressfreien Service'}
          about={
            'Vereinfache deine Bestellaufnahme! Mit der mobilen Kasse nimmst du Bestellungen im Restaurant schneller entgegen Alle Bestellkanäle laufen direkt in der PayPoint Restaurant Software zusammen, egal ob Bestellung an der Theke, per QR-Code oder online Das entlastet deinen in-House Betrieb und verringert deine Fehlerquote  Die automatische Übertragung von Bestellungen an den Küchenmanager ermöglicht die schnellere Abarbeitung von Bestellungen'
          }
        />
        <OneSystem />
        <ImageOnLeftContentOnRight
          Header={StaticData.Resutaurant.DeliveryAndPortal.Header}
          TitleOne={StaticData.Resutaurant.DeliveryAndPortal.TitleOne}
          TitleTwo={StaticData.Resutaurant.DeliveryAndPortal.TitleTwo}
          Bullets={StaticData.Resutaurant.DeliveryAndPortal.Bullets}
          LeanMoreUrl={StaticData.Resutaurant.DeliveryAndPortal.LearnMoreUrl}
          ImageUrl={StaticData.Resutaurant.DeliveryAndPortal.Image}
        />
        <ImageOnRightContentOnLeft
          Header={StaticData.Resutaurant.DigitalKitchen.Header}
          TitleOne={StaticData.Resutaurant.DigitalKitchen.TitleOne}
          TitleTwo={StaticData.Resutaurant.DigitalKitchen.TitleTwo}
          Bullets={StaticData.Resutaurant.DigitalKitchen.Bullets}
          ImageUrl={StaticData.Resutaurant.DigitalKitchen.Image}
          LeanMoreUrl={StaticData.Resutaurant.DigitalKitchen.LearnMoreUrl}
        />
        <ImageOnLeftContentOnRight
          Header={StaticData.Resutaurant.Payments.Header}
          TitleOne={StaticData.Resutaurant.Payments.TitleOne}
          TitleTwo={StaticData.Resutaurant.Payments.TitleTwo}
          Bullets={StaticData.Resutaurant.Payments.Bullets}
          ImageUrl={StaticData.Resutaurant.Payments.Image}
          LeanMoreUrl={StaticData.Resutaurant.Payments.LearnMoreUrl}
        />
        <FAQ jsonData={StaticData.Resutaurant.FAQ} />
      </Wrapper>
    </>
  );
};

export default Restaurant;
