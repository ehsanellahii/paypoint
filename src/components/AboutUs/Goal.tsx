import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Goal = () => {
  const t = useTranslations('Aboutus');

  return (
    <Wrapper style='w-full h-full py-8 md:py-12 bg-white'>
      <article className='w-full h-full grid md:grid-cols-[30fr,70fr] md:max-w-[85%] lg:max-w-[85%] mx-auto'>
        <div className='w-full h-full '>
          <h1 className='font-bold text-[2.5rem]'>{t("Unser Ziel")}</h1>
          <p className='text-start text-black-text text-lg'>
            {t("Unser Ziel ist es, Ihr Geschäft mit PayPoint zu unterstützen, indem wir Ihnen eine umfassende Kassenlösung bieten, die nicht nur benutzerfreundlich ist, sondern auch leistungsstarke Funktionen bietet, um Ihre betrieblichen Abläufe zu optimieren und Ihren Geschäftserfolg zu steigern")}
          </p>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full h-[9rem] md:h-[7rem] lg:h-full relative'>
            <Image
              src='/Assets/AboutUs/quote_change.svg'
              alt='We believe that change is the only constant'
              fill
              className=''
            />
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

export default Goal;
