import { useTranslations } from 'next-intl';
import React from 'react';

const Heading = ({ text }: { text: string }) => {
  const t = useTranslations('Landing');
  return (
    <h1 className='font-black text-[2.5rem] leading-[2.5rem] md:text-[3.4rem] md:leading-[3rem] '>
      {t(text)}
    </h1>
  );
};

export default Heading;
