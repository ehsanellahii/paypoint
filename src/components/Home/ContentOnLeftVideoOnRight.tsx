import React, { useEffect, useRef } from 'react';
import Wrapper from '../shared/Wrapper';
import Heading from './Heading';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const ContentOnLeftVideoOnRight = ({
  title,
  text,
  video,
  ImageUrl,
  isGif,
}: {
  title: string;
  text: string;
  video?: string;
  ImageUrl?: string;
  isGif?: string;
}) => {
  const t = useTranslations('Landing');
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const playPromise = videoRef.current?.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {})
        .catch((error) => console.error('Autoplay error:', error));
    }
  }, []);
  return (
    <Wrapper style='w-full h-full my-4'>
      <section
        className={`w-full h-full lg:h-[23rem] grid ${
          video ? 'lg:grid-cols-[46fr,56fr]' : 'lg:grid-cols-[36fr,50fr]'
        }  place-items-center gap-4 md:gap-12`}>
        <article className='w-full h-full md:py-12'>
          <div className='w-full h-full space-y-4'>
            <h1 className='font-black text-[2.3rem] leading-[2.3rem] md:text-[3.4rem] md:leading-[3.4rem] text-wrap'>
              {t(title)}
            </h1>
            <p className='text-grey-text text-base md:text-xl'>{t(text)}</p>
          </div>
        </article>
        <article
          className={`w-full h-full  ${video ? 'h-[22rem] md:h-[24rem] w-full ml-auto flex justify-center' : ''}`}>
          {video ? (
            <video
              ref={videoRef}
              src={video}
              className='w-auto h-full rounded-lg object-cover md:object-contain  lg:object-cover '
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              controls={false}
            />
          ) : (
            <div className='w-full h-[22rem] lg:h-full relative'>
              <Image
                src={ImageUrl || ''}
                alt={''}
                fill
                className='w-full h-full object-contain rounded-2xl'
              />
            </div>
          )}
        </article>
      </section>
    </Wrapper>
  );
};

export default ContentOnLeftVideoOnRight;
