import React from 'react';
import Wrapper from '../shared/Wrapper';
import Hero from './Hero';
import History from './History';
import Goal from './Goal';
import WhoAreWe from './WhoAreWe';
import ForContact from './ForContact';

const AboutUs = () => {
  return (
    <>
      <Hero />
      <History />
      <Goal />
      <WhoAreWe />
      <ForContact />
      {/* <Life /> */}
    </>
  );
};

export default AboutUs;
