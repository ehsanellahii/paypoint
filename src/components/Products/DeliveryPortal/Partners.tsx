import Wrapper from '@/components/shared/Wrapper';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

interface IPartnerProps {
  header: string;
  title: string;
  about: { text: string; bold?: boolean }[];
  image: string;
}

const Partners: React.FC<IPartnerProps> = ({ header, title, about, image }) => {
  return (
    <>
      <Wrapper style='w-full h-full pt-8 pb-4 md:pb-0 bg-white'>
        <div className='w-full h-full grid md:grid-cols-2 gap-8 md:gap-0'>
          <div className='w-full h-full flex flex-col px-4 md:pt-[3rem]'>
            <p className='font-medium text-lg'>{header}</p>
            <h1 className='font-bold text-[3rem] leading-[3rem] lg:text-[3rem] lg:leading-[3rem]'>
              {title}
            </h1>
            <p className='text-sm text-[1.5rem] leading-[1.35rem]'>
              {about.map((itm, idx) => (
                <span
                  key={idx}
                  className={`${itm.bold ? 'font-bold' : ''} ${idx === 0 ? 'pr-1' : idx === about.length - 1 ? 'pl-1' : 'px-1'}`}>
                  {itm.text}
                </span>
              ))}
            </p>
          </div>
          <div className='w-full h-full'>
            <div className='relative w-full h-[30rem] md:h-[42.35rem] rounded-lg overflow-hidden'>
              <Image src={image} alt='' fill className='w-full h-full object-contain' />
            </div>
            {/* <div>
            <Image src='' alt='' className='' />
          </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Partners;
