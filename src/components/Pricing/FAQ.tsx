import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';
import Accordion from '../shared/Accordion/Accordion';
import { StaticData } from '@/constants/Static';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations('Pricing');
  return (
    <Wrapper style='bg-bgApp py-8 bg-white'>
      <div className='w-full h-full md:max-w-[80%] lg:max-w-[50%] mx-auto py-8'>
        <Heading
          style='text-black-text !text-left'
          text={t('Häufige gestellte Fragen')}
        />
        <Accordion accordionList={StaticData.Resutaurant.FAQ} />
      </div>
    </Wrapper>
  );
};

export default FAQ;
