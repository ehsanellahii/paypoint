import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';

const Goal = () => {
  return (
    <Wrapper style='w-full h-full py-8 md:py-12 bg-white-main'>
      <article className='w-full h-full grid md:grid-cols-[30fr,70fr]'>
        <div className='w-full h-full '>
          <h1 className='font-bold text-[2.5rem]'>Unser Ziel</h1>
          <p className='text-start text-black-text text-lg'>
            Mit Tape wollen wir zu der #1 Low-Code Business-Plattform werden. Wir wollen
            nicht nur mit innovativen Funktionen und moderner Technologie überzeugen,
            sondern es mehr und mehr Menschen ermöglichen ihre eigenen leistungsstarken
            und einzigartigen Business-Lösungen zu bauen.
          </p>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full h-[9rem] md:h-[7rem] lg:h-full relative'>
            <Image
              src='/Assets/AboutUs/quote_change.svg'
              alt='We believe that change is the only constant'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

export default Goal;
