import React from 'react';
import Wrapper from '../shared/Wrapper';
import Heading from './Heading';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ContentOnRightVideoOnLeft = ({
  title,
  text,
  video,
  ImageUrl,
}: {
  title: string;
  text: string;
  video?: string;
  ImageUrl?: string;
}) => {
  const t = useTranslations('Landing');
  return (
    <Wrapper style='w-full h-full my-4'>
      <section
        className={`w-full h-full grid lg:grid-cols-[50fr,36fr] place-items-center gap-4 md:gap-2`}>
        <article className='w-full h-full md:px-12 order-2 lg:order-1'>
          {video ? (
            <video
              src={video}
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              preload='auto'
            />
          ) : (
            <div className='w-full h-[20rem] lg:h-full relative'>
              <Image
                src={ImageUrl || ''}
                alt={''}
                fill
                className='w-full h-full object-contain rounded-2xl'
              />
            </div>
          )}
        </article>
        <article className='w-full h-full md:py-12 order-1 lg:order-2 md:pr-4'>
          <div className='w-full h-full space-y-4'>
            <h1 className='font-black text-[2.3rem] leading-[2.3rem] md:text-[3.4rem] md:leading-[3rem] text-wrap'>
              {t(title)}
            </h1>
            <p className='text-grey-text text-base md:text-xl'>{t(text)}</p>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default ContentOnRightVideoOnLeft;
