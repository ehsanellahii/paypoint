import React from 'react';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

interface BusinessTypeHeroProps {
  header: string;
  titleOne?: string;
  titleTwo?: string;
  titleThree?: string;
  descOne?: string;
  descTwo?: string;
  descThree?: string;
  btnOneText?: string;
  btnTwoText?: string;
  imageUrl: string;
}

const BusinessTypeHero: React.FC<BusinessTypeHeroProps> = ({
  header,
  titleOne,
  titleTwo,
  titleThree,
  descOne,
  descTwo,
  descThree,
  btnOneText,
  btnTwoText,
  imageUrl,
}) => {
  const t = useTranslations('Common');

  return (
    <section id='hero' className='w-full h-full'>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
        }}
        className='w-full h-full md:h-[50rem] px-4 relative py-8 text-white'>
        <div className='w-full h-full max-w-[1320px] mx-auto '>
          <div className='w-full h-full flex flex-col gap-4 md:gap-16 px-4 md:px-12  lg:pr-16 pl-2 md:pl-10  md:py-10'>
            <h4 className='text-xl md:text-3xl'>{t(header)}</h4>
            <div>
              <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                {t(titleOne)}
              </h1>
              {titleTwo && (
                <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                  {t(titleTwo)}
                </h1>
              )}
              {titleThree && (
                <h1 className='font-bold text-[2.5rem] leading-[2.5rem] sm:text-[3rem] sm:leading-[3rem] md:text-[4rem] md:leading-[4rem]'>
                  {t(titleThree)}
                </h1>
              )}
            </div>

            <p className='text-xl md:text-3xl md:max-w-[60%] lg:max-w-[50%] mr-auto'>
              {descOne && t(descOne)}
              <br />
              {descTwo && t(descTwo)}
              <br />
              {descThree && t(descThree)}
            </p>
            <div className='w-full h-full flex flex-col md:flex-row gap-4 items-center md:px-4'>
              <Button className='bg-primary px-6 py-7 capitalize text-xl text-white rounded-lg'>
                {t(btnOneText)}
              </Button>
              <div>
                <Button className='bg-transparent px-6 py-7 capitalize text-xl text-primary flex items-center gap-4 rounded-lg'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='31'
                    height='30'
                    viewBox='0 0 31 30'
                    fill='none'>
                    <g clipPath='url(#clip0_1_16)'>
                      <path
                        d='M20.72 14.4884L13.2549 10.1628V18.7907L20.72 14.4884ZM25.72 14.4884L10.7665 23.1395V5.83722L25.72 14.4884Z'
                        fill='#5897CD'
                      />
                      <path
                        d='M15.72 30C7.44093 30 0.720001 23.2791 0.720001 15C0.720001 6.72093 7.44093 0 15.72 0C23.9991 0 30.72 6.72093 30.72 15C30.72 23.2791 23.9991 30 15.72 30ZM15.72 2.51163C8.83628 2.51163 3.20837 8.11628 3.20837 15.0233C3.20837 21.907 8.81302 27.5349 15.72 27.5349C22.6037 27.5349 28.2316 21.9302 28.2316 15.0233C28.2084 8.11628 22.6037 2.51163 15.72 2.51163Z'
                        fill='#5897CD'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_1_16'>
                        <rect
                          width='30'
                          height='30'
                          fill='white'
                          transform='translate(0.720001)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  {t(btnTwoText)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessTypeHero;
