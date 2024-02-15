import React from 'react';
import Wrapper from '../shared/Wrapper';
import { StaticData } from '@/constants/Static';
import { MdOutlineDone } from 'react-icons/md';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';

const Features = () => {
  const t = useTranslations('Landing');
  return (
    <Wrapper style='py-10'>
      <section className='w-full h-full grid md:grid-cols-2 gap-4 md:gap-2 '>
        <article className='w-full h-full flex flex-col items-start gap-3 md:max-w-[80%] mx-auto'>
          <h5 className='text-primary text-xl font-bold'>{t('Features')}</h5>
          <h1 className='font-black text-[2.3rem] leading-[2.3rem] md:text-[3.4rem] md:leading-[2.9rem] text-wrap'>
            {t('Kümmern Sie sich um Leckeres Essen, den Rest erledigen wir')}
          </h1>
          <p>{t('Access the following features with GetOrder:')} </p>
          <ul className='w-full h-full flex flex-col gap-3'>
            {StaticData.Landing.FeaturesWithOrder.map((itm, idx) => (
              <li
                key={idx}
                className='w-full h-full flex justify-start gap-2 items-center'>
                <div className='w-[1.7rem] h-[1.7rem] rounded-full text-white-main bg-primary p-1 flex items-center justify-center'>
                  <MdOutlineDone size={20} />
                </div>
                {t(itm)}
              </li>
            ))}
          </ul>
          <Button
            className='bg-primary px-8 py-6 rounded-md font-semibold text-white-main border-none mt-4 text-lg md:text-xl'
            type='button'>
            {t('Demo anfordern')}
          </Button>
        </article>
        
        <article className='w-full h-full flex items-center justify-center'>
          <div className='w-[13rem] h-[13rem] md:w-full md:h-full flex justify-center items-center relative'>
            <Image
              src='/Assets/Home/Chef.png'
              alt=''
              fill
              className='w-full h-full object-contain'
            />
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Features;
