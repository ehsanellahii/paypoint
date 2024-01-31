import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';
import Accordion from '../shared/Accordion/Accordion';
import { StaticData } from '@/constants/Static';

const FAQ = () => {
  return (
    <Wrapper style='bg-white-lightOrange py-8'>
      <Heading text='Häufige gestellte Fragen' />
      <div className='w-full h-full md:max-w-[80%] mx-auto py-8'>
        <Accordion accordionList={StaticData.Pricing.FAQ} />
      </div>
    </Wrapper>
  );
};

export default FAQ;
