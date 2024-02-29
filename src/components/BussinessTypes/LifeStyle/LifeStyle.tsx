import React from 'react';
import Hero from './Hero';
// import AboutService from './AboutService';
import Wrapper from '../../shared/Wrapper';
import OneSystem from './OneSystem';
import { StaticData } from '@/constants/Static';
import ImageOnRightContentOnLeft from '../../shared/sections/ImageContentSides/ImageOnRightContentOnLeft';
import ImageOnLeftContentOnRight from '../../shared/sections/ImageContentSides/ImageOnLeftContentOnRight';
import FAQ from './FAQ';
import AboutService from '../../shared/sections/AboutService';
const LifeStyle = () => {
  return (
    <>
      <Hero />
      <Wrapper style='w-full h-full bg-white'>
        <AboutService
          headerTitle='Die Unabhängigkeitserklärung für deinen Lieferservice'
          about='Lange Lieferzeiten und eine unübersichtliche Verwaltung der Order-Kanäle haben jetzt ein Ende! Mit PayPoint werden Bestellungen automatisch im Gastro-Kassensystem zusammengefasst Bestellungen von Webshop und App, in-House, Telefon und Lieferportalen werden anschließend direkt an den Küchenmanager weitergeleitet Auslieferungen werden automatisch in Routen gebündelt und Fahrer:innen sind via Tracking schneller erreichbar Dein Vorteil: Garantierte Auslieferung in unter 30 Minuten und bessere Kundenbewertungen!'
        />
        <OneSystem />
        <ImageOnRightContentOnLeft
          Header={StaticData.LifeStyle.WebShop.Header}
          TitleOne={StaticData.LifeStyle.WebShop.TitleOne}
          TitleTwo={StaticData.LifeStyle.WebShop.TitleTwo}
          Bullets={StaticData.LifeStyle.WebShop.Bullets}
          ImageUrl={StaticData.LifeStyle.WebShop.Image}
          LeanMoreUrl={StaticData.LifeStyle.WebShop.LearnMoreUrl}
        />
        <ImageOnLeftContentOnRight
          Header={StaticData.LifeStyle.ChannelManagement.Header}
          TitleOne={StaticData.LifeStyle.ChannelManagement.TitleOne}
          TitleTwo={StaticData.LifeStyle.ChannelManagement.TitleTwo}
          Bullets={StaticData.LifeStyle.ChannelManagement.Bullets}
          LeanMoreUrl={StaticData.LifeStyle.ChannelManagement.LearnMoreUrl}
          ImageUrl={StaticData.LifeStyle.ChannelManagement.Image}
        />
        <ImageOnRightContentOnLeft
          Header={StaticData.LifeStyle.FleetManagement.Header}
          TitleOne={StaticData.LifeStyle.FleetManagement.TitleOne}
          TitleTwo={StaticData.LifeStyle.FleetManagement.TitleTwo}
          Bullets={StaticData.LifeStyle.FleetManagement.Bullets}
          ImageUrl={StaticData.LifeStyle.FleetManagement.Image}
          LeanMoreUrl={StaticData.LifeStyle.FleetManagement.LearnMoreUrl}
        />
        <ImageOnLeftContentOnRight
          Header={StaticData.LifeStyle.ProductManagement.Header}
          TitleOne={StaticData.LifeStyle.ProductManagement.TitleOne}
          TitleTwo={StaticData.LifeStyle.ProductManagement.TitleTwo}
          Bullets={StaticData.LifeStyle.ProductManagement.Bullets}
          ImageUrl={StaticData.LifeStyle.ProductManagement.Image}
          LeanMoreUrl={StaticData.LifeStyle.ProductManagement.LearnMoreUrl}
        />
        <FAQ />
      </Wrapper>
    </>
  );
};

export default LifeStyle;
