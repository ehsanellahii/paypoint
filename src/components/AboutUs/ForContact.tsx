import React from 'react';
import ToContactUsButton from './ToContactusButton';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Wrapper from '../shared/Wrapper';

const ForContact = () => {
  const t = useTranslations('Aboutus');
  return (
    <Wrapper style='w-full h-full bg-white-lightOrange py-4 sm:py-6 md:py-10'>
      <div className='w-full h-full flex flex-col gap-4 md:px-10 md:max-w-[50%] mx-auto'>
        <div className='w-full h-[12rem] relative'>
          <Image
            src='/Assets/AboutUs/user.png'
            alt='Work better together.'
            fill
            className='object-contain'
          />
        </div>
        <h2 className='font-semibold text-xl md:text-3xl text-center'>{t('Und Du…?')}</h2>
        <h5 className='font-semibold text-xl md:text-3xl text-center'>
          {t('Wir suchen kluge Köpfe')}
        </h5>
        <p className=' text-lg md:text-2xl font-medium text-center px-4'>
          {t(
            'Was wäre eine ständig wachsende Firma ohne Zuwachs? Wenn Du eine neue Herausforderung suchst, können wir Dir vielleicht helfen'
          )}
        </p>
        <ToContactUsButton />
      </div>
    </Wrapper>
  );
};

export default ForContact;
