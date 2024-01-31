import React from 'react';
import Wrapper from '../shared/Wrapper';
import Heading from '../shared/Heading/Heading';
import Image from 'next/image';

const Life = () => {
  return (
    <Wrapper style='w-full h-full'>
      <Heading text='Das Leben bei Paypoint' />
      <p className='text-center text-xl text-black-text mt-4'>
        In München und in der ganzen Welt verteilt
      </p>
      <div className='w-full h-full py-10 px-2 grid sm:grid-cols-4 gap-4'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full relative'>
            <Image
              src='/Assets/AboutUs/Life/stefn.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
          <div className='w-full relative '>
            <Image
              src='/Assets/AboutUs/Life/FelixSascha.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full  relative'>
            <Image
              src='/Assets/AboutUs/Life/Meeting2.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <div className='w-full flex flex-col gap-4 justify-center items-center'>
          <div className='w-full relative'>
            <Image
              src='/Assets/AboutUs/Life/Meeting.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-contain'
            />
          </div>
          <div className='w-full relative'>
            <Image
              src='/Assets/AboutUs/Life/BenExplains-2.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='w-full h-full relative'>
            <Image
              src='/Assets/AboutUs/Life/Ben-1.png'
              alt=''
              width={150}
              height={150}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Life;
