import React from 'react';
import Wrapper from '../shared/Wrapper';
import { StaticData } from '@/constants/Static';
import Image from 'next/image';
import Heading from './Heading';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';
import { IconType } from 'react-icons';

const InfoCard = ({
  icon: Icon,
  title,
  text,
  bgColor,
}: {
  icon: IconType;
  title: string;
  text: string;
  bgColor: string;
}) => {
  const t = useTranslations('Landing');
  //@ts-ignore
  if (Icon === 'IoBug') {
    bgColor = 'bg-blue-dark';
  }
  if (title === 'Keine Manuelle Arbeit') {
    bgColor = 'bg-[#FFD800]';
  }
  //@ts-ignore
  if (Icon === 'CiNoWaitingSign') {
    bgColor = 'bg-red-neon';
  }
  return (
    <article className='w-full h-full flex gap-2 '>
      <div className={`px-4 flex items-start justify-center`}>
        <div
          className={`${bgColor} text-white-main w-10 h-10 rounded-full flex items-center justify-center`}>
          <Icon />
        </div>
      </div>
      <div className='w-full h-full flex flex-col justify-start items-start'>
        <h5 className='font-bold text-xl'>{t(title)}</h5>
        <p>{t(text)}</p>
      </div>
    </article>
  );
};

const Hero = () => {
  const t = useTranslations('Landing');
  return (
    <>
      <Wrapper style='mt-8'>
        <section className='w-full h-full grid md:grid-cols-[30fr,55fr] gap-3 md:gap-0 overflow-hidden'>
          {/* Left Side */}
          <article className='w-full h-full flex flex-col md:items-end md:justify-start justify-center gap-4 md:pl-10'>
            <Heading text={'Entdecken Sie unsere Lösungen'} />
            <p className='text-grey-text text-lg'>
              {t('HeroTextOne')}
              <span className='bg-red-cool p-1 rounded-lg text-white-main'>NEU</span>{' '}
              {t('HeroTextTwo')}
            </p>
            <div className='w-full h-full flex flex-col gap-4 md:px-4'>
              <Button
                className='rounded-3xl text-xl bg-blue-light hover:bg-blue-dark text-white-main px-4 py-6 font-bold flex justify-center w-full outline-none border-none focus:outline-none focus:border-none'
                type='button'>
                {t('TryButton')}
              </Button>
              <Button
                className='rounded-3xl text-xl border-blue-light border-[1px] text-blue-light px-4 py-6 font-bold flex justify-center w-full'
                type='button'>
                {t('ExploreButton')}
              </Button>
            </div>

            <div className='w-full flex flex-col gap-2 text-grey-text'>
              <div className='w-full h-full flex gap-6 pl-2 pt-2'>
                {StaticData.Landing.TrustGainedTeam.map((itm, idx) => (
                  <div key={idx} className='w-[3rem] h-[3rem] relative'>
                    <Image
                      src={itm.imageUrl}
                      alt={itm.alt}
                      fill
                      className='w-full h-full object-cover'
                    />
                  </div>
                ))}
              </div>
              <h4>{t('HeroFooterText')}</h4>
            </div>
          </article>
          {/* Right Side */}
          <article className='w-full h-full md:py-12 md:px-8'>
            <div className='relative w-full h-[13rem] md:h-full'>
              <Image
                src='/Assets/Home/your_orders.png'
                alt=''
                fill
                className='w-full h-full md:object-contain'
              />
            </div>
          </article>
        </section>
      </Wrapper>
      {/* Information related to Payout */}
      <Wrapper style='mt-8 bg-white-main py-12'>
        <section className='w-full h-full grid md:grid-cols-3 sm:grid-cols-2 place-items-center '>
          {StaticData.Landing.AboutFeatures.map((itm, idx) => (
            <InfoCard
              key={idx}
              title={itm.title}
              text={itm.text}
              icon={itm.icon}
              bgColor={itm.bgColor}
            />
          ))}
        </section>
      </Wrapper>
    </>
  );
};

export default Hero;
