import React from 'react';
import Wrapper from '../../shared/Wrapper';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Common');
  return (
    <section id='hero' className='w-full h-full'>
      <div
        style={{
          backgroundImage: `url('/Assets/LifeStyle/hero.png')`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-full md:min-h-[50rem]  text-white'>
        <div className='w-full h-full max-w-[1320px] mx-auto px-4 relative py-8'>
          <div className='w-full h-full flex flex-col gap-4 md:gap-16 px-4 md:px-12  lg:pr-16 pl-4 md:pl-10  md:py-10'>
            <h4 className='text-xl md:text-3xl'>
              {t('Unabhängige & flexible Lieferservice Software')}
            </h4>
            <div className='md:space-y-4'>
              <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                {t('Mehr Umsatz dank der')}
              </h1>
              <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                {t('Lieferdienst Software')}
              </h1>
            </div>

            <p className='text-xl md:text-3xl'>
              {t(
                'Mit PayPoint machst du dich unabhängiger von Lieferportalen und steigerst deinen Umsatz durch Bestellungen über den eigenen Webshop'
              )}
            </p>
            <div className='w-full h-full md:px-4'>
              <Button className='bg-primary px-6 py-7 capitalize text-xl text-white rounded-lg'>
                {t('Kontaktieren Sie uns')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
