import React from 'react';
import Hero from './Hero';
import AboutService from './AboutService';
import Wrapper from '../shared/Wrapper';
import OneSystem from './OneSystem';
import { StaticData } from '@/constants/Static';
import ImageOnRightContentOnLeft from '../shared/ImageContentSides/ImageOnRightContentOnLeft';
import ImageOnLeftContentOnRight from '../shared/ImageContentSides/ImageOnLeftContentOnRight';
import FAQ from './FAQ';

const LifeStyle = () => {
  return (
    <>
      <Hero />
      <Wrapper style='w-full h-full bg-white-main'>
        <AboutService headerTitle='' lineOne='' lineTwo='' lineThree='' about='' />
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
