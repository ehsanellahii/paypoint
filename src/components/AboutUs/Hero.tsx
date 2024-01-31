import React from 'react';
import Wrapper from '../shared/Wrapper';

const Hero = () => {
  return (
    <Wrapper style='w-full h-full bg-white-lightOrange  pt-8 md:pt-16'>
      {/* Left Side */}
      <div className='w-full h-full about-us-hero flex flex-col md:flex-row gap-4 '>
        <article className='w-full md:max-w-[40%] h-full flex flex-col justify-center items-center'>
          <div className='w-full h-full'>
            <h1 className='font-bold text-[4rem] lg:text-[6rem] leading-[4rem] lg:leading-[6rem] py-4'>
              <span>Wir sind</span> <span className='text-blue-dark'>Paypoint.</span>
            </h1>
            <p className='text-base md:text-2xl text-black-text'>
              Wir packen Dinge an und präsentieren Lösungen. Wir lieben Innovationen,
              glauben an das Unmögliche und stellen unsere Community an erste Stelle.
            </p>
          </div>
        </article>
        {/* Right Side Video one */}
        <article className='h-full  w-full  md:max-w-[60%] border-none rounded-lg outline-none shadow-video'>
          <video
            src={'/Assets/Home/DummyVideo.mp4'}
            className='w-full h-full max-w-full object-cover border-none outline-none leading-3 rounded-xl'
            autoPlay
            muted
            loop
            preload='auto'
          />
        </article>
      </div>
    </Wrapper>
  );
};

export default Hero;
