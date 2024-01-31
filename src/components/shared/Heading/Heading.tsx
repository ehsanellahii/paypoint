import { useTranslations } from 'next-intl';
import React from 'react';

const Heading = ({ text, style = 'text-center' }: { text: string; style?: string }) => {
  return (
    <h1
      className={`text-3xl font-black sm:text-[2.5rem] sm:leading-[2.5rem] md:text-[2.8rem] md:leading-[3rem] md:font-bold  break-keep ${style}`}>
      {text}
    </h1>
  );
};

export default Heading;
