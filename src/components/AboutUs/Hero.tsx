import React from 'react';
import Wrapper from '../shared/Wrapper';
import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Aboutus');
  return (
    <Wrapper style='w-full h-full bg-bgApp about-us-hero  pt-8 md:pt-16'>
      {/* Left Side */}
      <div className='w-full h-full  flex flex-col md:flex-row gap-4'>
        <div className='w-full md:max-w-[40%] h-full  flex flex-col justify-between gap-4 lg:gap-16 lg:pt-20'>
          <h1 className='font-bold md:h-full text-[4rem] lg:text-[5rem] leading-[5rem] lg:leading-[5rem]'>
            <span>{t('Wir sind')}</span>{' '}
            <span className='text-primaryDark'>PayPoint.</span>
          </h1>
          <p className='text-base md:h-full md:text-lg text-black-text'>
            {t(
              'Wir packen Dinge an und präsentieren Lösungen Wir lieben Innovationen,glauben an das Unmögliche und stellen unsere Community an erste Stelle'
            )}
          </p>
        </div>
        {/* Right Side Video one */}
        <article className='h-full w-full md:max-w-[60%] border-none rounded-lg outline-none'>
          <video
            src={'/Assets/AboutUs/paypoint_team.mp4'}
            className='w-full md:w-auto h-full max-h-[30rem] object-contain md:object-cover border-none outline-none leading-3 rounded-xl shadow-video'
            autoPlay
            muted
            loop
            preload='auto'
            playsInline
            controls={false}
          />
        </article>
      </div>
    </Wrapper>
  );
};

export default Hero;
