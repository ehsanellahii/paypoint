import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';
import Accordion from '../shared/Accordion/Accordion';
import { StaticData } from '@/constants/Static';
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const t = useTranslations("Pricing")
  return (
    <Wrapper style='bg-bgApp py-8'>
      <Heading text={t('Häufige gestellte Fragen')} />
      <div className='w-full h-full md:max-w-[80%] mx-auto py-8'>
        <Accordion accordionList={StaticData.Resutaurant.FAQ} />
      </div>
    </Wrapper>
  );
};

export default FAQ;
