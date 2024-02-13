'use client';
import React from 'react';

import { StaticData } from '@/constants/Static';
import Accordion from '../shared/Accordion/Accordion';
import Workplace from './Workplace';
import Calculation from './Calculation';
import WhyUseSides from './WhyUseSides';
import FAQ from './FAQ';

export const Heading = ({
  text,
  style = 'text-black-text',
}: {
  text: string;
  style?: string;
}) => {
  return (
    <h1
      className={`text-center font-bold text-3xl md:text-[2rem] leading-[2rem] ${style}`}>
      {text}
    </h1>
  );
};

const Pricing = () => {
  return (
    <>
      <Workplace />
      <Calculation />
      <WhyUseSides />
      <FAQ />
    </>
  );
};

export default Pricing;
