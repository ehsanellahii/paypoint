import React from 'react';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Common');
  return (
    <section id='hero' className='w-full h-full'>
      <div
        style={{
          backgroundImage: `url('/Assets/Restaurant/restaurant.png')`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
        className='w-full h-full md:h-[50rem] px-4 relative py-8 text-white'>
        <div className='w-full h-full max-w-[1320px] mx-auto '>
          <div className='w-full h-full flex flex-col gap-4 md:gap-16 px-4 md:px-12  lg:pr-16 pl-2 md:pl-10  md:py-10'>
            <h4 className='text-xl md:text-3xl'>
              {t('Smarte & erfolgreiche Restaurant Software')}
            </h4>
            <div>
              <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                {t('Vereinfache deine')}
              </h1>
              <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                {t('Restaurant Abläufe')}.
              </h1>
            </div>

            <p className='text-xl md:text-3xl'>
              {t('Mit der modularen Restaurant Software von PayPoint')}
              <br />
              {t('behältst du den Überblick über dein Restaurant')}
              <br />
              {t('und verwaltest alle Bestellungen an einem Ort')}
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
