import React from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import Wrapper from '@/components/shared/Wrapper';
import { useTranslations } from 'next-intl';

interface ILeftImageProductHeroProps {
  header: string;
  title: string;
  about: string;
  image: string;
}

const LeftImageProductHero: React.FC<ILeftImageProductHeroProps> = ({
  header,
  title,
  about,
  image,
}) => {
  const t = useTranslations('Common');
  return (
    <Wrapper style={`w-full h-full pb-8 pt-4 bg-white`}>
      <div className='w-full h-full grid md:grid-cols-2 gap-8 md:gap-0 '>
        <div className='w-full h-full flex flex-col justify-center gap-4 px-4'>
          <p className='font-semibold text-lg'>{t(header)}</p>
          <h1 className='font-bold text-[3rem] leading-[3rem] lg:text-[4rem] lg:leading-[4rem]'>
            {t(title)}
          </h1>
          <p className='text-[1.25rem] font-medium lg:max-w-[80%]'>{t(about)}</p>
          <div className='flex flex-col md:flex-row w-full font-semibold  items-center gap-5 mt-4'>
            <Button className='bg-primaryDark text-base font-medium text-white  px-7 py-6 rounded-md'>
              {t('Kontakt aufnehmen')}
            </Button>
          </div>
        </div>
        <div className='w-full h-[32.35rem]'>
          <div className='relative w-full h-[32.35rem]  rounded-lg overflow-hidden'>
            <Image src={image} alt='' fill className='w-full h-full object-contain' />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default LeftImageProductHero;
