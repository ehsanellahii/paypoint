import React from 'react';
import Accordion from '../../shared/Accordion/Accordion';
import { StaticData } from '@/constants/Static';
import Heading from '../../shared/Heading/Heading';

const FAQ = () => {
  return (
    <article className='w-full h-full py-8 md:py-12 md:max-w-[60%] mx-auto space-y-10'>
      <Heading text='FAQ' style='text-left' />
      <Accordion
        accordionList={StaticData.Resutaurant.FAQ}
        arrowColor='text-main-brand'
      />
    </article>
  );
};

export default FAQ;
