import React from 'react';
import Wrapper from '../Wrapper';
import { StaticData } from '@/constants/Static';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

type FeatureType = {
  title: string;
  about: string;
  image: string;
};

type IFeaturesProps = {
  header: string;
  title: string;
  about: { text: string; bold?: boolean }[];
  image: string;
  features: FeatureType[];
  showFeaturesHero?: boolean;
};

type IFeatureCardProps = {
  itm: FeatureType;
};

const FeatureCard: React.FC<IFeatureCardProps> = ({ itm }) => {
  const t = useTranslations('Common');
  return (
    <div className='w-full h-full flex flex-col items-start justify-center gap-4 text-white'>
      <div className='w-[4.5rem] h-[5.1rem] relative'>
        <Image
          src={itm.image}
          alt={t(itm.title)}
          className='w-full h-full object-contain'
          fill
        />
      </div>
      <h3 className='font-bold text-[2.5rem] text-left'>{t(itm.title)}</h3>
      <p className='text-left'>{t(itm.about)}</p>
    </div>
  );
};

const Features: React.FC<IFeaturesProps> = ({
  title,
  about,
  header,
  image,
  features,
  showFeaturesHero = true,
}) => {
  const t = useTranslations('Common');
  return (
    <>
      {showFeaturesHero && (
        <Wrapper style='w-full h-full bg-white py-8'>
          <div className='w-full h-full grid md:grid-cols-[60fr,40fr]'>
            <div className='w-full h-full'>
              <div className='relative w-full h-[32.35rem] md:max-w-[80%] mr-auto rounded-lg overflow-hidden'>
                <Image
                  src={image}
                  alt={t(title)}
                  fill
                  className='w-full h-full object-cover'
                />
                {/* <div className='flex flex-col bg-white'>
                <Image
                  src='/Assets/Icons/qr-code.png'
                  alt=''
                  width={100}
                  height={100}
                  className=''
                />

              </div> */}
              </div>
            </div>
            <div className='w-full h-full flex flex-col justify-center gap-4 px-4'>
              <p className='font-semibold'>{header && t(header)}</p>
              <h1 className='font-bold text-[4rem] leading-[5rem]'>{t(title)}</h1>
              <p className='text-[1.25rem] font-medium'>
                {about.map((itm, idx) => (
                  <span
                    key={idx}
                    className={`${itm.bold ? 'font-bold' : ''} ${idx === 0 ? 'pr-1' : idx === about.length - 1 ? 'pl-1' : 'px-1'}`}>
                    {t(itm.text)}
                  </span>
                ))}
              </p>
              <div className='flex w-full font-semibold  items-center gap-5'>
                <Button className='bg-primary text-white text-base font-medium px-7 py-6 rounded-md mt-4'>
                  {t('Erfahren Sie mehr')}
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
      )}
      <Wrapper style='w-full h-full bg-primaryDark py-8'>
        <div className='w-full h-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8'>
          {features.map((itm, idx) => (
            <FeatureCard key={idx} itm={itm} />
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Features;
