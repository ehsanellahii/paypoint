import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Wrapper from '../Wrapper';
import { useTranslations } from 'next-intl';

interface IProductsHeroProps {
  header: string;
  title: string;
  about: string;
  image: string;
  productTitle: string;
  video?: string;
}

const ProductsHero: React.FC<IProductsHeroProps> = ({
  header,
  title,
  about,
  image,
  productTitle,
  video,
}) => {
  const t = useTranslations('Common');
  return (
    <Wrapper style={`w-full h-full pb-8 pt-4 ${video ? 'bg-white' : 'bg-white'}`}>
      {productTitle && (
        <div className='w-full h-full pb-8 px-4'>
          <h1 className='text-2xl font-bold'>{t(productTitle)}</h1>
        </div>
      )}
      <div className='w-full h-full grid md:grid-cols-2 gap-8 md:gap-0 '>
        <div className='w-full h-full flex flex-col justify-center gap-4 px-4 '>
          <p className='font-semibold text-lg'>{t(header)}</p>
          <h1 className='font-bold text-[3rem] leading-[4rem] lg:text-[4rem] lg:leading-[5rem]'>
            {t(title)}
          </h1>
          <p className='text-[1.25rem] font-medium lg:max-w-[80%]'>{t(about)}</p>
          <div className='flex flex-col md:flex-row w-full font-semibold  items-center gap-5 mt-4'>
            <Button className='bg-primaryDark text-base font-medium text-white  px-7 py-6 rounded-md'>
              {t('Kontakt aufnehmen')}
            </Button>
            <Button className='text-primary bg-transparent text-base font-medium px-7 py-6 rounded-md flex items-center gap-2'>
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
              {t('Video abspielen')}
            </Button>
          </div>
        </div>
        <div className='w-full h-[32.35rem]'>
          {video ? (
            <video
              src={video}
              className='w-full h-full object-contain border-none outline-none leading-3'
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              controls={false}
            />
          ) : (
            <div className='relative w-full h-[32.35rem]  rounded-lg overflow-hidden'>
              <Image
                src={image}
                alt={t(title)}
                fill
                className='w-full h-full object-cover'
              />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductsHero;
